/* ══════════════════════════════════════════════════════════════
   MayaPets Admin Panel — admin.js
   Full logic: Auth, Products, Orders, Firebase
   ══════════════════════════════════════════════════════════════ */

// ── FIREBASE SETUP ──────────────────────────────────────────────
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import {
  getFirestore, collection, getDocs, doc,
  getDoc, setDoc, updateDoc, query, orderBy
} from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBTDb-RiuIKmXC4MJJQgSidWbLylNO-NHw",
  authDomain: "mayapetsproject.firebaseapp.com",
  projectId: "mayapetsproject",
  storageBucket: "mayapetsproject.firebasestorage.app",
  messagingSenderId: "988493888178",
  appId: "1:988493888178:web:a1984309337782333a27ab"
};

const app  = initializeApp(firebaseConfig);
const db   = getFirestore(app);

// ── CONSTANTS ────────────────────────────────────────────────────
const ADMIN_USER   = 'admin';
const ADMIN_PASS   = 'admin123';
const SESSION_KEY  = 'mayaAdminSession';
const PRODUCTS_KEY = 'mayaPetsExtraProducts';
const ROWS_PER_PAGE = 10;

// ── STATE ────────────────────────────────────────────────────────
let allOrders        = [];   // aggregated from Firestore
let currentSection   = 'dashboard';
let productPage      = 1;
let orderPage        = 1;
let deletingProductId = null;

// ══════════════════════════════════════════════════════════════
// BOOT
// ══════════════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  // Set topbar date
  const d = new Date();
  document.getElementById('topbarDate').textContent =
    d.toLocaleDateString('en-IN', { weekday:'short', day:'numeric', month:'short', year:'numeric' });

  if (localStorage.getItem(SESSION_KEY) === 'true') {
    showAdmin();
  } else {
    document.getElementById('loginPage').style.display = 'flex';
    document.getElementById('adminApp').style.display  = 'none';
  }
});

// ══════════════════════════════════════════════════════════════
// AUTH
// ══════════════════════════════════════════════════════════════
window.doLogin = function() {
  const u = document.getElementById('loginUsername').value.trim();
  const p = document.getElementById('loginPassword').value;
  const err = document.getElementById('loginError');
  if (u === ADMIN_USER && p === ADMIN_PASS) {
    localStorage.setItem(SESSION_KEY, 'true');
    err.style.display = 'none';
    showAdmin();
  } else {
    err.style.display = 'block';
    document.getElementById('loginPassword').value = '';
  }
};

window.doLogout = function() {
  localStorage.removeItem(SESSION_KEY);
  document.getElementById('loginPage').style.display  = 'flex';
  document.getElementById('adminApp').style.display   = 'none';
  document.getElementById('loginPassword').value = '';
  document.getElementById('loginUsername').value = '';
  document.getElementById('sidebar').classList.remove('open');
  const overlay = document.getElementById('sidebarOverlay');
  if (overlay) overlay.classList.remove('open');
};

function showAdmin() {
  document.getElementById('loginPage').style.display  = 'none';
  document.getElementById('adminApp').style.display   = 'flex';
  switchSection('dashboard');
  populateProductFilters();
}

// ══════════════════════════════════════════════════════════════
// NAVIGATION
// ══════════════════════════════════════════════════════════════
const SECTION_TITLES = {
  'dashboard':       '📊 Dashboard Overview',
  'add-product':     '➕ Add Product',
  'manage-products': '🗂️ Manage Products',
  'orders':          '📦 Customer Orders',
  'customer-details': '📋 Order & Customer Details'
};

window.switchSection = function(name) {
  document.querySelectorAll('.section-view').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));

  const sec = document.getElementById('sec-' + name);
  if (sec) sec.classList.add('active');

  const navEl = document.getElementById('nav-' + name);
  if (navEl) navEl.classList.add('active');

  document.getElementById('topbarTitle').textContent = SECTION_TITLES[name] || '';
  currentSection = name;

  if (name === 'dashboard')        refreshDashboard();
  if (name === 'manage-products')  { renderProductsTable(); populateProductFilters(); }
  if (name === 'orders')           loadOrders();

  if (window.innerWidth <= 1024) {
    document.getElementById('sidebar').classList.remove('open');
    const overlay = document.getElementById('sidebarOverlay');
    if (overlay) overlay.classList.remove('open');
  }
};

window.toggleSidebar = function() {
  document.getElementById('sidebar').classList.toggle('open');
  const overlay = document.getElementById('sidebarOverlay');
  if (overlay) overlay.classList.toggle('open');
};

// ══════════════════════════════════════════════════════════════
// TOAST
// ══════════════════════════════════════════════════════════════
let toastTimer = null;
function showToast(msg, type = 'success') {
  const toast   = document.getElementById('toast');
  const msgEl   = document.getElementById('toastMsg');
  const iconEl  = document.getElementById('toastIcon');
  const icons   = { success: 'check_circle', error: 'error', info: 'info' };

  toast.className = `toast ${type}`;
  msgEl.textContent  = msg;
  iconEl.textContent = icons[type] || 'check_circle';
  toast.classList.add('show');

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3500);
}

// ══════════════════════════════════════════════════════════════
// PRODUCT STORAGE (localStorage)
// ══════════════════════════════════════════════════════════════
function getAdminProducts() {
  try {
    return JSON.parse(localStorage.getItem(PRODUCTS_KEY) || '[]');
  } catch { return []; }
}

function saveAdminProducts(products) {
  localStorage.setItem(PRODUCTS_KEY, JSON.stringify(products));
}

/** Returns combined ALL_PRODUCTS + admin-added products */
function getStoredProducts() {
  const base  = (typeof ALL_PRODUCTS !== 'undefined') ? ALL_PRODUCTS : [];
  const admin = getAdminProducts();
  const map = new Map();
  base.forEach(p => map.set(p.id, p));
  admin.forEach(p => map.set(p.id, p));
  return Array.from(map.values());
}

// Make available globally for cart.js
window.getStoredProducts = getStoredProducts;

// ══════════════════════════════════════════════════════════════
// ADD / EDIT PRODUCT FORM
// ══════════════════════════════════════════════════════════════
let weightOptionCount = 0;

window.addWeightRow = function(w = '', p = '') {
  weightOptionCount++;
  const id = 'wo_' + weightOptionCount;
  const row = document.createElement('div');
  row.className = 'weight-option-row';
  row.id = id;
  row.innerHTML = `
    <input class="form-control" placeholder="Weight (e.g. 3kg)" value="${w}" id="${id}_w"/>
    <input class="form-control" type="number" placeholder="Price (₹)" value="${p}" id="${id}_p"/>
    <button class="btn-remove-weight" onclick="removeWeightRow('${id}')">
      <span class="material-symbols-outlined" style="font-size:18px;">close</span>
    </button>`;
  document.getElementById('weightOptionsList').appendChild(row);
};

window.removeWeightRow = function(id) {
  const el = document.getElementById(id);
  if (el) el.remove();
};

function getWeightOptions(discountVal) {
  const rows = document.querySelectorAll('#weightOptionsList .weight-option-row');
  const opts = [];
  rows.forEach(row => {
    const wInput = row.querySelector('[id$="_w"]');
    const pInput = row.querySelector('[id$="_p"]');
    if (wInput && pInput && wInput.value.trim() && pInput.value) {
      const pValue = parseInt(pInput.value); // This is treated as Original Price
      const oValue = pValue;
      const finalPrice = discountVal ? Math.floor(pValue * (1 - (discountVal / 100))) : pValue;
      opts.push({ 
        w: wInput.value.trim(), 
        p: finalPrice, 
        o: oValue, 
        d: discountVal ? `${discountVal}% OFF` : '' 
      });
    }
  });
  return opts.length ? opts : null;
}

window.handleImageUpload = function(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    const data = e.target.result;
    document.getElementById('fp-image-data').value = data;
    const prev = document.getElementById('imgPreview');
    prev.src = data;
    prev.style.display = 'block';
    document.getElementById('uploadIcon').style.display = 'none';
  };
  reader.readAsDataURL(file);
};

window.saveProduct = function() {
  const name     = document.getElementById('fp-name').value.trim();
  const brand    = document.getElementById('fp-brand').value.trim();
  const category = document.getElementById('fp-category').value;
  const cat      = document.getElementById('fp-cat').value.trim();
  const inputPrice = parseInt(document.getElementById('fp-price').value);
  const discountVal = parseInt(document.getElementById('fp-discount').value) || 0;
  const oldPrice = inputPrice;
  const price    = discountVal ? Math.floor(inputPrice * (1 - (discountVal / 100))) : inputPrice;
  const discount = discountVal ? `${discountVal}% OFF` : '';
  const stock    = parseInt(document.getElementById('fp-stock').value) || 0;
  const unit     = document.getElementById('fp-unit').value;
  const status   = document.getElementById('fp-status').value;
  const desc     = document.getElementById('fp-desc').value.trim();
  const features = document.getElementById('fp-features').value.trim();
  const badge    = document.getElementById('fp-badge').value.trim() || brand.substring(0,2).toUpperCase();
  const imageData = document.getElementById('fp-image-data').value;
  const imageUrl  = document.getElementById('fp-image-url').value.trim();
  const image     = imageData || imageUrl || 'images/placeholder.png';
  const msgEl     = document.getElementById('productFormMsg');
  const editingId = document.getElementById('editingProductId').value;

  // Validate
  if (!name || !brand || !price || !desc) {
    msgEl.className = 'error-msg';
    msgEl.textContent = '⚠️ Please fill in all required fields (Name, Brand, Price, Description).';
    msgEl.style.display = 'block';
    return;
  }

  const weightOptions = getWeightOptions(discountVal);
  const adminProducts = getAdminProducts();

  if (editingId) {
    // UPDATE existing admin product
    const idx = adminProducts.findIndex(p => p.id === editingId);
    if (idx !== -1) {
      adminProducts[idx] = { ...adminProducts[idx], name, brand, category, cat, price, oldPrice, discount, stock, unit, status, desc, features, badge, image, weightOptions };
    } else {
      adminProducts.push({ id: editingId, name, brand, category, cat, price, oldPrice, discount, stock, unit, status, desc, features, badge, image, weightOptions, isOverride: true });
    }
    saveAdminProducts(adminProducts);
    showToast('✅ Product updated successfully!', 'success');
    document.getElementById('editingProductId').value = '';
    document.getElementById('addFormTitle').textContent = 'New Product';
    document.getElementById('saveProductBtnText').textContent = 'Save Product';
  } else {
    // CREATE new product
    const newProduct = {
      id: 'adm_' + Date.now(),
      name, brand, category, cat, price, oldPrice, discount,
      stock, unit, status, desc, features, badge, image,
      weightOptions,
      isAdminAdded: true
    };
    adminProducts.unshift(newProduct);
    saveAdminProducts(adminProducts);
    showToast('✅ Product added to store!', 'success');
  }

  msgEl.className = 'success-msg';
  msgEl.textContent = editingId ? '✅ Product updated successfully!' : '✅ Product added to the store!';
  msgEl.style.display = 'block';
  setTimeout(() => { msgEl.style.display = 'none'; }, 3000);

  resetProductForm();
};

window.resetProductForm = function() {
  ['fp-name','fp-brand','fp-cat','fp-price','fp-oldprice','fp-discount',
   'fp-stock','fp-features','fp-desc','fp-badge','fp-image-data','fp-image-url'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  document.getElementById('fp-category').value = 'Pet Food';
  document.getElementById('fp-unit').value = 'KG';
  document.getElementById('fp-status').value = 'active';
  document.getElementById('weightOptionsList').innerHTML = '';
  weightOptionCount = 0;

  const prev = document.getElementById('imgPreview');
  prev.src = ''; prev.style.display = 'none';
  document.getElementById('uploadIcon').style.display = 'block';

  document.getElementById('editingProductId').value = '';
  document.getElementById('addFormTitle').textContent = 'New Product';
  document.getElementById('saveProductBtnText').textContent = 'Save Product';
};

function populateProductFilters() {
  const brands = [...new Set(getStoredProducts().map(p => p.brand))].sort();
  const sel = document.getElementById('productBrandFilter');
  const cur = sel.value;
  sel.innerHTML = '<option value="">All Brands</option>' +
    brands.map(b => `<option value="${b}" ${b === cur ? 'selected' : ''}>${b}</option>`).join('');

  // Also populate the brand datalist for the Add Product form
  const dataList = document.getElementById('brand-options');
  if (dataList) {
    dataList.innerHTML = brands.map(b => `<option value="${b}"></option>`).join('');
  }
}

// ══════════════════════════════════════════════════════════════
// MANAGE PRODUCTS TABLE
// ══════════════════════════════════════════════════════════════
window.renderProductsTable = function() {
  const search  = (document.getElementById('productSearch')?.value || '').toLowerCase();
  const brand   = document.getElementById('productBrandFilter')?.value || '';
  const status  = document.getElementById('productStatusFilter')?.value || '';

  let products = getStoredProducts().filter(p => {
    const matchSearch = !search || p.name.toLowerCase().includes(search) || p.brand.toLowerCase().includes(search);
    const matchBrand  = !brand  || p.brand === brand;
    const matchStatus = !status || (p.status || 'active') === status;
    return matchSearch && matchBrand && matchStatus;
  });

  const total = products.length;
  const start = (productPage - 1) * ROWS_PER_PAGE;
  const page  = products.slice(start, start + ROWS_PER_PAGE);
  const tbody = document.getElementById('productsTableBody');

  if (products.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7">
      <div class="empty-state">
        <span class="material-symbols-outlined">search_off</span>
        <h3>No products found</h3><p>Try changing your search or filters.</p>
      </div></td></tr>`;
    document.getElementById('productsPagination').innerHTML = '';
    return;
  }

  tbody.innerHTML = page.map(p => {
    const st = (p.status || 'active');
    const isAdmin = p.isAdminAdded;
    return `
    <tr>
      <td><img src="${p.image}" class="product-thumb" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2280%22>📦</text></svg>'"/></td>
      <td>
        <div class="product-name-cell">${p.name}</div>
        <div class="product-brand-cell">${p.brand} ${isAdmin ? '<span style="background:rgba(139,92,246,0.12);color:#8b5cf6;padding:2px 7px;border-radius:5px;font-size:0.7rem;font-weight:700;">Admin Added</span>' : ''}</div>
      </td>
      <td style="font-weight:600;color:#555;font-size:0.85rem;">${p.brand}</td>
      <td style="font-weight:800;">₹${(p.price||0).toLocaleString()}</td>
      <td style="font-weight:700;">${p.stock !== undefined ? p.stock : '—'}</td>
      <td><span class="badge ${st}">${st === 'active' ? 'Active' : 'Out of Stock'}</span></td>
      <td>
        <div class="action-btns">
          <button class="action-btn ab-edit" onclick="editProduct('${p.id}')">
            <span class="material-symbols-outlined" style="font-size:14px;">edit</span> Edit
          </button>
          ${isAdmin ? `
          <button class="action-btn ab-delete" onclick="deleteProduct('${p.id}','${p.name.replace(/'/g,"\\'")}')">
            <span class="material-symbols-outlined" style="font-size:14px;">delete</span> Delete
          </button>` : ''}
          <button class="action-btn" style="background:rgba(16,185,129,0.1);color:#059669;" onclick="quickToggleStatus('${p.id}','${st}')">
            <span class="material-symbols-outlined" style="font-size:14px;">${st==='active'?'visibility_off':'visibility'}</span>
            ${st==='active'?'Deactivate':'Activate'}
          </button>
        </div>
      </td>
    </tr>`;
  }).join('');

  renderPagination('productsPagination', 'product', total, productPage);
};

window.editProduct = function(id) {
  const allProducts = getStoredProducts();
  const p = allProducts.find(pr => pr.id === id);
  if (!p) return showToast('Product not found.', 'error');

  // Switch to add-product form
  switchSection('add-product');

  // Pre-fill form
  document.getElementById('editingProductId').value = id;
  document.getElementById('addFormTitle').textContent = 'Editing: ' + p.name;
  document.getElementById('saveProductBtnText').textContent = 'Update Product';
  document.getElementById('fp-name').value     = p.name || '';
  document.getElementById('fp-brand').value    = p.brand || '';
  document.getElementById('fp-category').value = p.category || 'Pet Food';
  document.getElementById('fp-cat').value      = p.cat || '';
  document.getElementById('fp-price').value    = p.oldPrice || p.price || '';
  document.getElementById('fp-discount').value = p.discount ? parseInt(p.discount) : '';
  document.getElementById('fp-stock').value    = p.stock || '';
  document.getElementById('fp-unit').value     = p.unit || 'KG';
  document.getElementById('fp-status').value   = p.status || 'active';
  document.getElementById('fp-desc').value     = p.desc || '';
  document.getElementById('fp-features').value = p.features || '';
  document.getElementById('fp-badge').value    = p.badge || '';

  // Handle image
  if (p.image && p.image.startsWith('data:')) {
    document.getElementById('fp-image-data').value = p.image;
    const prev = document.getElementById('imgPreview');
    prev.src = p.image; prev.style.display = 'block';
    document.getElementById('uploadIcon').style.display = 'none';
  } else {
    document.getElementById('fp-image-url').value = p.image || '';
  }

  // Weight options
  document.getElementById('weightOptionsList').innerHTML = '';
  weightOptionCount = 0;
  if (p.weightOptions && p.weightOptions.length > 0) {
    p.weightOptions.forEach(opt => addWeightRow(opt.w, opt.o || opt.p));
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
  showToast('Product loaded for editing.', 'info');
};

window.deleteProduct = function(id, name) {
  deletingProductId = id;
  document.getElementById('deleteProductName').textContent = name;
  document.getElementById('deleteModal').classList.add('open');
};

window.confirmDelete = function() {
  if (!deletingProductId) return;
  let adminProducts = getAdminProducts();
  adminProducts = adminProducts.filter(p => p.id !== deletingProductId);
  saveAdminProducts(adminProducts);
  deletingProductId = null;
  document.getElementById('deleteModal').classList.remove('open');
  renderProductsTable();
  showToast('🗑️ Product deleted.', 'info');
};

window.quickToggleStatus = function(id, currentStatus) {
  const newStatus = currentStatus === 'active' ? 'inactive' : 'active';
  let adminProducts = getAdminProducts();
  const idx = adminProducts.findIndex(p => p.id === id);
  
  if (idx !== -1) {
    adminProducts[idx].status = newStatus;
  } else {
    // It's a built-in product being modified for the first time
    const allProducts = getStoredProducts();
    const baseP = allProducts.find(p => p.id === id);
    if (baseP) {
      adminProducts.push({ ...baseP, status: newStatus, isOverride: true });
    }
  }
  
  saveAdminProducts(adminProducts);
  renderProductsTable();
  showToast(`Product ${newStatus === 'active' ? 'activated' : 'deactivated'}.`, 'info');
};

window.closeEditModal = function() {
  document.getElementById('editModal').classList.remove('open');
};

// ══════════════════════════════════════════════════════════════
// ORDERS — FIREBASE
// ══════════════════════════════════════════════════════════════
window.loadOrders = async function() {
  document.getElementById('ordersLoading').style.display  = 'block';
  document.getElementById('ordersTableWrap').style.display = 'none';
  allOrders = [];

  try {
    // Method 1: Read from global `orders` collection (written by updated checkout.html)
    const globalSnap = await getDocs(collection(db, 'orders'));
    globalSnap.forEach(d => allOrders.push({ ...d.data(), _docId: d.id }));

    // Method 2: Fallback — also scan all `users` documents for their orders arrays
    if (allOrders.length === 0) {
      const usersSnap = await getDocs(collection(db, 'users'));
      usersSnap.forEach(userDoc => {
        const data = userDoc.data();
        if (data.orders && Array.isArray(data.orders)) {
          data.orders.forEach(order => {
            if (!allOrders.find(o => o.orderId === order.orderId)) {
              allOrders.push({
                ...order,
                userId: userDoc.id,
                userName: data.displayName || data.email || 'Customer',
                userEmail: data.email || ''
              });
            }
          });
        }
      });
    }
  } catch (e) {
    console.error('Firebase Orders load error:', e);
    // Continue nicely: we will gracefully fallback to localStorage
  }

  // Method 3: ALWAYS fallback to localStorage for orders created while offline or if Firebase fails
  try {
    const localOrdersDef = localStorage.getItem('mayaAdminOrders');
    if (localOrdersDef) {
      const localOrders = JSON.parse(localOrdersDef);
      localOrders.forEach(lo => {
        if (!allOrders.find(o => o.orderId === lo.orderId)) {
          allOrders.push(lo);
        }
      });
    }
  } catch (err) {
    console.error("Local orders load error:", err);
  }

  // Sort by timestamp desc
  allOrders.sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));

  renderOrdersTable();
  updatePendingBadge();
};

function updatePendingBadge() {
  const pending = allOrders.filter(o => o.status === 'Pending' || o.status === 'Ordered').length;
  const badge = document.getElementById('pendingBadge');
  if (pending > 0) {
    badge.textContent  = pending;
    badge.style.display = 'inline-block';
  } else {
    badge.style.display = 'none';
  }
}

window.renderOrdersTable = function() {
  const search  = (document.getElementById('orderSearch')?.value || '').toLowerCase();
  const statusF = document.getElementById('orderStatusFilter')?.value || '';

  let orders = allOrders.filter(o => {
    const matchSearch = !search ||
      (o.orderId || '').toLowerCase().includes(search) ||
      (o.userName || '').toLowerCase().includes(search) ||
      (o.userEmail || '').toLowerCase().includes(search) ||
      (o.address?.name || '').toLowerCase().includes(search);
    const effectiveStatus = o.status || 'Ordered';
    const matchStatus = !statusF || effectiveStatus === statusF ||
      (statusF === 'Pending' && effectiveStatus === 'Ordered');
    return matchSearch && matchStatus;
  });

  const total = orders.length;
  const start = (orderPage - 1) * ROWS_PER_PAGE;
  const page  = orders.slice(start, start + ROWS_PER_PAGE);

  document.getElementById('ordersLoading').style.display  = 'none';
  document.getElementById('ordersTableWrap').style.display = 'block';

  const tbody = document.getElementById('ordersTableBody');

  if (orders.length === 0) {
    tbody.innerHTML = `<tr><td colspan="8">
      <div class="empty-state">
        <span class="material-symbols-outlined">receipt_long</span>
        <h3>No orders found</h3><p>Orders placed by customers will appear here.</p>
      </div></td></tr>`;
    document.getElementById('ordersPagination').innerHTML = '';
    return;
  }

  tbody.innerHTML = page.map(order => {
    const st = order.status || 'Ordered';
    const stClass = st.toLowerCase().replace(/\s+/g, '_');
    const customerName = order.userName || order.address?.name || 'Customer';
    const itemsSummary = (order.items || []).map(i => i.name).slice(0, 2).join(', ') +
      (order.items?.length > 2 ? ` +${order.items.length - 2} more` : '');
    const orderDate = order.date || '—';

    const statuses = ['Pending','Confirmed','Processing','Shipped','Out for Delivery','Delivered','Cancelled'];

    return `
    <tr>
      <td style="font-weight:800;font-size:0.88rem;white-space:nowrap;">${order.orderId || '—'}</td>
      <td style="cursor:pointer;" onclick="viewOrderDetails('${order.orderId}')">
        <div style="font-weight:700;font-size:0.88rem;color:var(--blue);">${customerName}</div>
        <div style="font-size:0.78rem;color:#888;">${order.userEmail || ''}</div>
      </td>
      <td style="font-size:0.82rem;color:#555;max-width:200px;">${itemsSummary || '—'}</td>
      <td style="font-weight:800;">₹${(order.total||0).toLocaleString()}</td>
      <td style="font-size:0.82rem;font-weight:600;">${order.paymentMethod || 'COD'}</td>
      <td style="font-size:0.82rem;white-space:nowrap;">${orderDate}</td>
      <td><span class="badge ${stClass}">${st}</span></td>
      <td>
        <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;">
          <select class="status-select" id="stSel_${order.orderId}">
            ${statuses.map(s => `<option value="${s}" ${s===st?'selected':''}>${s}</option>`).join('')}
          </select>
          <button class="btn-update-status" onclick="updateOrderStatus('${order.orderId}','${order.userId || ''}')">
            Update
          </button>
        </div>
      </td>
    </tr>`;
  }).join('');

  renderPagination('ordersPagination', 'order', total, orderPage);
};

window.updateOrderStatus = async function(orderId, userId) {
  const sel = document.getElementById('stSel_' + orderId);
  if (!sel) return;
  const newStatus = sel.value;
  const btn = sel.nextElementSibling;
  btn.disabled = true;
  btn.textContent = '...';

  let fbError = null;

  try {
    // 1. Update in global orders collection
    const globalOrderRef = doc(db, 'orders', orderId);
    const globalSnap = await getDoc(globalOrderRef);
    if (globalSnap.exists()) {
      await updateDoc(globalOrderRef, { status: newStatus, [`statusTimestamps.${newStatus}`]: Date.now() });
    }

    // 2. Update in user's orders array
    const targetUserId = userId || (globalSnap.exists() ? globalSnap.data().userId : null);
    if (targetUserId) {
      const userRef = doc(db, 'users', targetUserId);
      const userSnap = await getDoc(userRef);
      if (userSnap.exists()) {
        const orders = userSnap.data().orders || [];
        const idx = orders.findIndex(o => o.orderId === orderId);
        if (idx !== -1) {
          orders[idx].status = newStatus;
          orders[idx].statusTimestamps = orders[idx].statusTimestamps || {};
          orders[idx].statusTimestamps[newStatus] = Date.now();
          await setDoc(userRef, { orders }, { merge: true });
        }
      }
    }
  } catch (e) {
    console.error('Firebase Status update error:', e);
    fbError = e;
  }

  // 3. ALWAYS update in localStorage Fallback
  try {
    const localOrdersDef = localStorage.getItem('mayaAdminOrders');
    if (localOrdersDef) {
       const localOrders = JSON.parse(localOrdersDef);
       const idx = localOrders.findIndex(o => o.orderId === orderId);
       if (idx !== -1) {
          localOrders[idx].status = newStatus;
          localOrders[idx].statusTimestamps = localOrders[idx].statusTimestamps || {};
          localOrders[idx].statusTimestamps[newStatus] = Date.now();
          localStorage.setItem('mayaAdminOrders', JSON.stringify(localOrders));
       }
    }
  } catch (localErr) {
    console.error('Local fallback update error:', localErr);
  }

  // 4. Update local state memory
  const orderIdx = allOrders.findIndex(o => o.orderId === orderId);
  if (orderIdx !== -1) allOrders[orderIdx].status = newStatus;

  renderOrdersTable();
  updatePendingBadge();

  if (fbError) {
    showToast(`Order ${orderId} updated locally (Firebase error averted).`, 'success');
  } else {
    showToast(`✅ Order ${orderId} → ${newStatus}`, 'success');
  }

  if (btn) { btn.disabled = false; btn.textContent = 'Update'; }
};

// ══════════════════════════════════════════════════════════════
// DASHBOARD
// ══════════════════════════════════════════════════════════════
window.refreshDashboard = async function() {
  // Stats from products
  const products = getStoredProducts();
  document.getElementById('statProducts').textContent = products.length;

  // Load orders if not done
  if (allOrders.length === 0) await loadOrders();

  document.getElementById('statOrders').textContent  = allOrders.length;
  document.getElementById('statPending').textContent = allOrders.filter(o =>
    ['Pending','Ordered','Confirmed','Processing'].includes(o.status)).length;

  const revenue = allOrders.reduce((sum, o) => sum + (o.total || 0), 0);
  document.getElementById('statRevenue').textContent = '₹' + revenue.toLocaleString('en-IN');

  // Recent orders
  const recentEl = document.getElementById('recentOrdersList');
  if (allOrders.length === 0) {
    recentEl.innerHTML = '<div class="empty-state"><span class="material-symbols-outlined">receipt_long</span><p>No orders yet</p></div>';
  } else {
    recentEl.innerHTML = allOrders.slice(0, 6).map(o => {
      const st = o.status || 'Ordered';
      const stClass = st.toLowerCase().replace(/\s+/g, '_');
      return `
      <div class="recent-order-row" style="cursor:pointer;" onclick="viewOrderDetails('${o.orderId}')">
        <div>
          <div class="recent-order-id">${o.orderId}</div>
          <div class="recent-order-meta">${o.userName || o.address?.name || 'Customer'} • ${o.date || ''}</div>
        </div>
        <div style="text-align:right;">
          <div style="font-weight:800;font-size:0.9rem;">₹${(o.total||0).toLocaleString()}</div>
          <span class="badge ${stClass}" style="margin-top:4px;">${st}</span>
        </div>
      </div>`;
    }).join('');
  }

  // Status breakdown
  const statuses = ['Pending', 'Ordered', 'Confirmed', 'Processing', 'Shipped', 'Out for Delivery', 'Delivered', 'Cancelled'];
  const colors   = { Pending:'#f59e0b', Ordered:'#0497B1', Confirmed:'#0497B1', Processing:'#8b5cf6', Shipped:'#10b981', 'Out for Delivery':'#d97706', Delivered:'#10b981', Cancelled:'#ef4444' };

  const counts = {};
  statuses.forEach(s => { counts[s] = 0; });
  allOrders.forEach(o => {
    const s = o.status || 'Ordered';
    if (counts[s] !== undefined) counts[s]++;
  });

  const breakdownEl = document.getElementById('statusBreakdown');
  const total = allOrders.length || 1;
  breakdownEl.innerHTML = statuses.filter(s => counts[s] > 0 || s === 'Delivered').map(s => `
    <div class="status-row">
      <span style="font-size:0.82rem;font-weight:700;min-width:130px;">${s}</span>
      <div class="status-bar-wrap">
        <div class="status-bar" style="width:${Math.round((counts[s]/total)*100)}%;background:${colors[s]};"></div>
      </div>
      <span style="font-weight:800;font-size:0.9rem;min-width:30px;text-align:right;">${counts[s]}</span>
    </div>`).join('');
};

// ══════════════════════════════════════════════════════════════
// PAGINATION HELPER
// ══════════════════════════════════════════════════════════════
window.changePage = function(type, page) {
  if (type === 'product') {
    productPage = page;
    renderProductsTable();
  } else if (type === 'order') {
    orderPage = page;
    renderOrdersTable();
  }
};

function renderPagination(containerId, type, total, current) {
  const totalPages = Math.ceil(total / ROWS_PER_PAGE);
  const container  = document.getElementById(containerId);
  if (totalPages <= 1) { container.innerHTML = ''; return; }

  let html = '';
  if (current > 1) html += `<button class="page-btn" onclick="changePage('${type}', ${current-1})">‹</button>`;

  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || Math.abs(i - current) <= 2) {
      html += `<button class="page-btn ${i===current?'active':''}" onclick="changePage('${type}', ${i})">${i}</button>`;
    } else if (Math.abs(i - current) === 3) {
      html += `<span class="page-info">…</span>`;
    }
  }

  if (current < totalPages) html += `<button class="page-btn" onclick="changePage('${type}', ${current+1})">›</button>`;
  html += `<span class="page-info">${(current-1)*ROWS_PER_PAGE+1}–${Math.min(current*ROWS_PER_PAGE, total)} of ${total}</span>`;
  container.innerHTML = html;
}

// ══════════════════════════════════════════════════════════════
// CUSTOMER DETAILS VIEW
// ══════════════════════════════════════════════════════════════
window.viewOrderDetails = function(orderId) {
  // Use allOrders which is the global state for orders
  const order = allOrders.find(o => o.orderId === orderId);
  if (!order) return showToast('Order not found', 'error');

  const addr = order.address || {};
  
  // 1. Set Title
  document.getElementById('detailTitle').innerHTML = `Order #<b>${orderId}</b>`;
  
  // 2. Set Customer Info
  document.getElementById('cd-customerInfo').innerHTML = `
    <div style="margin-bottom:12px;">
      <small style="color:#888; font-weight:700; text-transform:uppercase; font-size:0.65rem;">Customer Name</small>
      <div style="font-weight:800; font-size:1.1rem; color:var(--text);">${order.userName || addr.name || 'Anonymous'}</div>
    </div>
    <div style="margin-bottom:12px;">
      <small style="color:#888; font-weight:700; text-transform:uppercase; font-size:0.65rem;">Email Address</small>
      <div style="font-weight:600; color:var(--text);">${order.userEmail || 'No Email'}</div>
    </div>
    <div>
      <small style="color:#888; font-weight:700; text-transform:uppercase; font-size:0.65rem;">Mobile Number</small>
      <div style="font-weight:800; color:var(--blue); font-size:1.1rem;">${addr.phone || 'No Phone'}</div>
    </div>
  `;

  // 3. Set Shipping Address
  document.getElementById('cd-shippingAddress').innerHTML = `
    <div style="margin-bottom:8px;">
      <span class="badge" style="background:rgba(4,151,177,0.1); color:var(--blue); border-radius:6px; font-size:0.65rem;">${addr.type || 'HOME'}</span>
    </div>
    <div style="font-weight:700; color:var(--text); line-height:1.6;">
      ${addr.line1}${addr.line2 ? ', ' + addr.line2 : ''}<br/>
      ${addr.city}, ${addr.state} - ${addr.pincode}
    </div>
  `;

  // 4. Set Order Summary & Total
  const tbody = document.getElementById('cd-orderItems');
  tbody.innerHTML = (order.items || []).map(item => `
    <tr>
      <td style="font-weight:700;">${item.name}</td>
      <td>₹${item.price.toLocaleString()}</td>
      <td style="font-weight:800;">x${item.qty}</td>
      <td style="font-weight:900;">₹${(item.price * item.qty).toLocaleString()}</td>
    </tr>
  `).join('');

  document.getElementById('cd-grandTotal').textContent = `₹${(order.total || 0).toLocaleString()}`;

  // 5. Status Control
  const st = order.status || 'Ordered';
  const statuses = ['Pending','Confirmed','Processing','Shipped','Out for Delivery','Delivered','Cancelled'];
  
  document.getElementById('cd-statusControl').innerHTML = `
      <select class="status-select" id="stSelDetail_${orderId}" style="min-width:180px;">
        ${statuses.map(s => `<option value="${s}" ${s===st?'selected':''}>${s}</option>`).join('')}
      </select>
      <button class="btn-update-status" onclick="updateOrderStatusFromDetail('${orderId}','${order.userId || ''}')">
        Update Status
      </button>
  `;

  switchSection('customer-details');
};

window.updateOrderStatusFromDetail = async function(orderId, userId) {
  // Use the existing window.updateOrderStatus logic but targeting the new select ID
  // To avoid duplication, we temporarily proxy the ID
  const originalGet = document.getElementById;
  document.getElementById = function(id) {
    if (id === 'stSel_' + orderId) return originalGet.call(document, 'stSelDetail_' + orderId);
    return originalGet.call(document, id);
  };

  await window.updateOrderStatus(orderId, userId);

  // Restore
  document.getElementById = originalGet;
  
  // Note: loadOrders() will be called internally by updateOrderStatus which refreshes the context
  document.getElementById = originalGet;
};

window.printInvoice = function() {
  window.print();
};

/* ══════════════════════════════════════════════════════════════
   BULK IMPORT LOGIC
   ══════════════════════════════════════════════════════════════ */
window.openBulkImportModal = function() {
  document.getElementById('bulkImportModal').classList.add('open');
  switchToBulkStep(1);
};

window.closeBulkImportModal = function() {
  document.getElementById('bulkImportModal').classList.remove('open');
  if (currentSection === 'manage-products' || currentSection === 'add-product') {
    renderProductsTable();
    populateProductFilters();
  }
};

function switchToBulkStep(step) {
  ['bulkStep1', 'bulkStep2', 'bulkStep3'].forEach((id, i) => {
    const el = document.getElementById(id);
    if (el) el.style.display = (i + 1 === step) ? 'block' : 'none';
  });
}

window.downloadReferenceCSV = function() {
  const headers = ['name', 'brand', 'category', 'cat', 'price', 'discount', 'stock', 'unit', 'status', 'features', 'desc', 'image', 'badge'];
  const sample = ['Adult Chicken & Rice', 'Bairo', 'Pet Food', 'Dog Food', '1200', '20', '50', 'KG', 'active', 'High Protein | Easy Digest', 'Premium nutrition for adult dogs.', 'images/Barioo/Bario-Adult EC-Chicken and rice.png', 'BA'];
  
  const csvContent = [headers.join(','), sample.join(',')].join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.setAttribute("download", "mayapets_bulk_template.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

window.handleBulkFileSelect = function(event) {
  const file = event.target.files[0];
  if (file) startBulkImport(file);
};

window.handleBulkDrop = function(event) {
  event.preventDefault();
  const file = event.dataTransfer.files[0];
  if (file && file.name.endsWith('.csv')) {
    startBulkImport(file);
  } else {
    showToast('Please drop a valid CSV file.', 'error');
  }
  // Reset zone style
  const zone = document.getElementById('bulkUploadZone');
  if (zone) {
    zone.style.borderColor = 'var(--border)';
    zone.style.background = 'var(--gray)';
  }
};

function startBulkImport(file) {
  switchToBulkStep(2);
  const bar = document.getElementById('bulkProgressBar');
  const pct = document.getElementById('bulkPercentLabel');
  const msg = document.getElementById('bulkStatusMsg');
  
  if (bar) bar.style.width = '0%';
  if (pct) pct.textContent = '0%';
  if (msg) msg.textContent = 'Reading file...';

  if (typeof Papa === 'undefined') {
    showToast('CSV Parser library not loaded. Please refresh.', 'error');
    switchToBulkStep(1);
    return;
  }

  Papa.parse(file, {
    header: true,
    skipEmptyLines: true,
    complete: function(results) {
      processBulkData(results.data);
    },
    error: function(err) {
      showToast('Error parsing CSV: ' + err.message, 'error');
      switchToBulkStep(1);
    }
  });
}

async function processBulkData(rows) {
  const resultsLog = document.getElementById('bulkResultsLog');
  if (resultsLog) resultsLog.innerHTML = '';
  
  let successCount = 0;
  let errorCount = 0;
  const total = rows.length;
  
  const adminProducts = getAdminProducts();
  const timestamp = Date.now();

  for (let i = 0; i < total; i++) {
    const row = rows[i];
    const rowNum = i + 1;
    
    const percent = Math.round(((i + 1) / total) * 100);
    const bar = document.getElementById('bulkProgressBar');
    const pct = document.getElementById('bulkPercentLabel');
    const msg = document.getElementById('bulkStatusMsg');
    
    if (bar) bar.style.width = percent + '%';
    if (pct) pct.textContent = percent + '%';
    if (msg) msg.textContent = `Processing row ${i+1} of ${total}...`;

    const validation = validateBulkRow(row);
    
    if (resultsLog) {
      const tr = document.createElement('tr');
      if (validation.valid) {
        successCount++;
        const pMRP = parseInt(row.price);
        const pDisc = parseInt(row.discount) || 0;
        const pFinal = pDisc ? Math.floor(pMRP * (1 - (pDisc / 100))) : pMRP;
        
        const newProduct = {
          id: 'adm_bulk_' + timestamp + '_' + i,
          name: row.name.trim(),
          brand: row.brand.trim(),
          category: row.category || 'Pet Food',
          cat: row.cat || '',
          oldPrice: pMRP,
          price: pFinal,
          discount: pDisc ? `${pDisc}% OFF` : '',
          stock: parseInt(row.stock) || 0,
          unit: row.unit || 'KG',
          status: row.status || 'active',
          desc: row.desc || '',
          features: row.features || '',
          badge: row.badge || row.brand.substring(0,2).toUpperCase(),
          image: row.image || 'images/placeholder.png',
          isAdminAdded: true
        };
        adminProducts.unshift(newProduct);
        
        tr.innerHTML = `
          <td><span class="bulk-row-num">#${rowNum}</span></td>
          <td><div class="product-name-cell">${row.name}</div></td>
          <td><span class="bulk-success-text"><span class="material-symbols-outlined bulk-status-icon">check_circle</span> Success</span></td>
        `;
      } else {
        errorCount++;
        tr.innerHTML = `
          <td><span class="bulk-row-num">#${rowNum}</span></td>
          <td><div class="product-name-cell">${row.name || 'Unknown'}</div></td>
          <td><span class="bulk-error-text" title="${validation.error}"><span class="material-symbols-outlined bulk-status-icon">error</span> Failed: ${validation.error}</span></td>
        `;
      }
      resultsLog.appendChild(tr);
    }
    
    if (total > 20) await new Promise(r => setTimeout(r, 10));
  }

  saveAdminProducts(adminProducts);
  
  const okCountEl = document.getElementById('bulkSuccessCount');
  const errCountEl = document.getElementById('bulkErrorCount');
  if (okCountEl) okCountEl.textContent = successCount;
  if (errCountEl) errCountEl.textContent = errorCount;
  
  switchToBulkStep(3);
  showToast(`Bulk Import Complete: ${successCount} Success, ${errorCount} Failed`, successCount > 0 ? 'success' : 'error');
}

function validateBulkRow(row) {
  if (!row.name || !row.name.trim()) return { valid: false, error: 'Missing Name' };
  if (!row.brand || !row.brand.trim()) return { valid: false, error: 'Missing Brand' };
  if (!row.price || isNaN(parseInt(row.price))) return { valid: false, error: 'Invalid/Missing Price' };
  if (!row.desc || !row.desc.trim()) return { valid: false, error: 'Missing Description' };
  return { valid: true };
}
