// MayaPets Global E-commerce Logic
const CART_STORAGE_KEY = 'mayaPetsCart';

// ─── CART CORE ───────────────────────────────────────────
function getCart() {
  const cart = localStorage.getItem(CART_STORAGE_KEY);
  return cart ? JSON.parse(cart) : [];
}

function saveCart(cart) {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  updateCartBadge();
  // Notify other components (like cart page) to re-render
  window.dispatchEvent(new Event('cartUpdated'));
}

function addToCart(product) {
  const cart = getCart();
  // Ensure qty is a valid number
  const qtyToAdd = parseInt(product.qty) || 1;
  const existingItem = cart.find(item => item.name === product.name && item.unit === product.unit);
  
  if (existingItem) {
    existingItem.qty = (parseInt(existingItem.qty) || 0) + qtyToAdd;
  } else {
    cart.push({
      id: Date.now() + Math.random(),
      ...product,
      qty: qtyToAdd // Force numeric qty
    });
  }
  
  saveCart(cart);
  showCartFeedback();
}

function showCartFeedback() {
  const badges = document.querySelectorAll('#cartBadge');
  badges.forEach(badge => {
    badge.classList.remove('bump');
    void badge.offsetWidth; // Trigger reflow
    badge.classList.add('bump');
  });
}

function removeFromCart(id) {
  let cart = getCart();
  cart = cart.filter(item => String(item.id) !== String(id));
  saveCart(cart);
}

function updateQuantity(id, delta) {
  let cart = getCart();
  const item = cart.find(item => String(item.id) === String(id));
  if (item) {
    item.qty = Math.max(1, item.qty + delta);
    saveCart(cart);
  }
}

function updateCartBadge() {
  const cart = getCart();
  // Use a safer reduce with a default check for qty
  const totalQty = cart.reduce((sum, item) => {
    const q = parseInt(item.qty);
    return sum + (isNaN(q) ? 0 : q);
  }, 0);
  
  const badges = document.querySelectorAll('#cartBadge');
  badges.forEach(badge => {
    badge.innerText = totalQty;
  });
}

// ─── PRODUCT MODAL LOGIC ──────────────────────────────
let currentModalProduct = null;

function openProductModal(productIdOrName, price, brand, image, discount, oldPrice, description, features, unit = 'Qty', weightOptions = null) {
  // Overload: if first arg is an ID and others are missing, fetch from ALL_PRODUCTS
  if (arguments.length === 1 && typeof productIdOrName === 'string') {
    const products = typeof getStoredProducts === 'function' ? getStoredProducts() : [];
    const p = products.find(prod => prod.id === productIdOrName);
    if (p) {
      productIdOrName = p.name;
      price = p.price;
      brand = p.brand;
      image = p.image;
      discount = p.discount;
      oldPrice = p.oldPrice;
      description = p.desc;
      features = p.features;
      unit = p.unit;
      weightOptions = p.weightOptions;
    }
  }

  currentModalProduct = { 
    name: productIdOrName, 
    basePrice: parseInt(String(price).replace(/[^\d]/g, '')), 
    brand, 
    image, 
    unit, 
    qty: 1,
    weightOptions,
    selectedWeightIndex: 0
  };

  // If weights exist, override basePrice with first option
  if (weightOptions && weightOptions.length > 0) {
    currentModalProduct.basePrice = weightOptions[0].p;
  }

  let modal = document.getElementById('productModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'productModal';
    modal.className = 'modal-overlay';
    document.body.appendChild(modal);
  }

  renderModalInner();

  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function renderModalInner() {
  const modal = document.getElementById('productModal');
  if (!modal || !currentModalProduct) return;

  const { name, brand, image, unit, qty, basePrice, weightOptions, selectedWeightIndex } = currentModalProduct;
  const featuresList = (currentModalProduct.features || '').split('|').map(f => `<li>${f.trim()}</li>`).join('');
  const totalPrice = basePrice * qty;

  const weightSelectorHtml = weightOptions ? `
    <div class="modal-weight-selector" style="margin-bottom: 20px;">
      <label style="font-weight:700; font-size:0.9rem; margin-bottom:8px; display:block;">Select Weight</label>
      <div style="display:flex; gap:10px; flex-wrap:wrap;">
        ${weightOptions.map((opt, idx) => `
          <div class="weight-chip ${idx === selectedWeightIndex ? 'active' : ''}" 
               style="padding:8px 16px; border:2px solid ${idx === selectedWeightIndex ? 'var(--blue)' : '#eee'}; 
                      border-radius:10px; cursor:pointer; font-weight:700; font-size:0.85rem;
                      background:${idx === selectedWeightIndex ? 'rgba(4,151,177,0.05)' : 'white'}"
               onclick="selectModalWeight(${idx})">
            ${opt.w} <span style="display:block; font-size:0.75rem; color:#888;">₹${opt.p}</span>
          </div>
        `).join('')}
      </div>
    </div>
  ` : '';

  modal.innerHTML = `
    <div class="modal-container">
      <button class="modal-close" onclick="closeProductModal()">
        <span class="material-symbols-outlined">close</span>
      </button>
      <div class="modal-gallery">
        <img src="${image}" alt="${name}">
      </div>
      <div class="modal-info">
        <span class="modal-brand">${brand}</span>
        <h2 class="modal-title">${name}</h2>
        <div class="modal-price-row">
          <span class="modal-price" id="modalDisplayPrice">₹${totalPrice.toLocaleString()}</span>
        </div>
        
        ${weightSelectorHtml}

        <div class="qty-section" style="margin-bottom: 25px;">
          <label style="font-weight:700; font-size:0.9rem; display:block; margin-bottom:8px;">Quantity</label>
          <div class="qty-stepper">
            <button class="qty-btn" onclick="updateModalQty(-1)">−</button>
            <span class="qty-val" id="modalQtyVal">${qty}</span>
            <button class="qty-btn" onclick="updateModalQty(1)">+</button>
          </div>
        </div>

        <div class="modal-actions" style="display:flex; gap:12px; margin-top: auto;">
          <button class="btn-buy-now" onclick="handleBuyNow()" style="flex:1; background:var(--yellow); color:var(--black); border:none; padding:15px; border-radius:12px; font-weight:800; cursor:pointer; font-size:1rem; box-shadow:0 8px 20px rgba(0,0,0,0.05);">Buy Now</button>
          <button class="btn-add-detail" onclick="handleModalAddToCart()" style="flex:1; background:var(--blue); color:white; border:none; padding:15px; border-radius:12px; font-weight:800; cursor:pointer; font-size:1rem; box-shadow:0 8px 20px rgba(4,151,177,0.15);">Add to Cart</button>
        </div>
      </div>
    </div>
  `;
}

window.selectModalWeight = function(idx) {
  if (!currentModalProduct || !currentModalProduct.weightOptions) return;
  currentModalProduct.selectedWeightIndex = idx;
  currentModalProduct.basePrice = currentModalProduct.weightOptions[idx].p;
  renderModalInner();
}

window.handleModalAddToCart = function() {
  if (!currentModalProduct) return;
  const p = currentModalProduct;
  const weightSuffix = (p.weightOptions && p.weightOptions[p.selectedWeightIndex]) ? ` (${p.weightOptions[p.selectedWeightIndex].w})` : '';
  
  addToCart({
    name: p.name + weightSuffix,
    price: p.basePrice,
    brand: p.brand,
    image: p.image,
    qty: p.qty,
    unit: p.unit
  });
  closeProductModal();
}

function updateModalQty(delta) {
  if (!currentModalProduct) return;
  currentModalProduct.qty = Math.max(1, currentModalProduct.qty + delta);
  
  const qtyVal = document.getElementById('modalQtyVal');
  const priceVal = document.getElementById('modalDisplayPrice');
  
  if (qtyVal) qtyVal.innerText = currentModalProduct.qty;
  if (priceVal) {
    const total = currentModalProduct.basePrice * currentModalProduct.qty;
    priceVal.innerText = `₹${total.toLocaleString()}`;
  }
}

function handleAddToCart() {
  handleModalAddToCart();
}

function handleBuyNow() {
  if (!currentModalProduct) return;
  const p = currentModalProduct;
  const weightSuffix = (p.weightOptions && p.weightOptions[p.selectedWeightIndex]) ? ` (${p.weightOptions[p.selectedWeightIndex].w})` : '';

  const buyNowItem = {
    id: 'buynow_' + Date.now(),
    name: p.name + weightSuffix,
    price: p.basePrice,
    brand: p.brand,
    image: p.image,
    qty: p.qty,
    unit: p.unit
  };
  localStorage.setItem('mayaPetsCheckoutItems', JSON.stringify([buyNowItem]));
  localStorage.setItem('mayaPetsCheckoutMode', 'buynow');
  closeProductModal();
  window.location.href = 'checkout.html';
}

function closeProductModal() {
  const modal = document.getElementById('productModal');
  if (modal) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
  currentModalProduct = null;
}

// ─── ORDER FLOWS (REDIRECT TO CHECKOUT) ───────────────────────────
function orderItem(id) {
  const cart = getCart();
  const item = cart.find(i => String(i.id) === String(id));
  if (item) {
    localStorage.setItem('mayaPetsCheckoutItems', JSON.stringify([item]));
    localStorage.setItem('mayaPetsCheckoutMode', 'single');
    localStorage.setItem('mayaPetsCheckoutSingleId', id);
    window.location.href = 'checkout.html';
  }
}

function orderAll() {
  const cart = getCart();
  if (cart.length === 0) return alert("Your cart is empty!");
  localStorage.setItem('mayaPetsCheckoutItems', JSON.stringify(cart));
  localStorage.setItem('mayaPetsCheckoutMode', 'cart');
  window.location.href = 'checkout.html';
}

// Global modal closer on overlay click
window.onclick = function(event) {
  const modal = document.getElementById('productModal');
  if (event.target == modal) {
    closeProductModal();
  }
}

document.addEventListener('DOMContentLoaded', updateCartBadge);
window.addEventListener('load', updateCartBadge);
