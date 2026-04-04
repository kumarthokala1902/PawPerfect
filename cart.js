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

function openProductModal(name, price, brand, image, discount, oldPrice, description, features, unit = 'Qty') {
  currentModalProduct = { 
    name, 
    basePrice: parseInt(String(price).replace(/[^\d]/g, '')), 
    brand, 
    image, 
    unit, 
    qty: 1 
  };

  let modal = document.getElementById('productModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'productModal';
    modal.className = 'modal-overlay';
    document.body.appendChild(modal);
  }

  const featuresList = features.split('|').map(f => `<li>${f.trim()}</li>`).join('');
  const unitLabel = unit === 'KG' ? 'Price per KG' : 'Unit Price';

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
          <span class="modal-price" id="modalDisplayPrice">₹${currentModalProduct.basePrice}</span>
          <span class="modal-savings">Save ${discount}</span>
        </div>
        <span class="price-unit-label">${unitLabel}: ₹${currentModalProduct.basePrice}</span>
        
        <div class="qty-section">
          <label style="font-weight:700; font-size:0.9rem">${unit === 'KG' ? 'Select Weight (KG)' : 'Quantity'}</label>
          <div class="qty-stepper">
            <button class="qty-btn" onclick="updateModalQty(-1)">−</button>
            <span class="qty-val" id="modalQtyVal">1</span>
            <button class="qty-btn" onclick="updateModalQty(1)">+</button>
          </div>
        </div>

        <div class="modal-features">
          <h4>About this item</h4>
          <p style="font-size:0.9rem; color:#555; margin-bottom:15px">${description}</p>
          <ul>${featuresList}</ul>
          <p style="margin-top:15px; color:green; font-weight:700; font-size:0.9rem">In Stock</p>
        </div>
        
        <div class="modal-actions">
          <button class="btn-buy-now" onclick="handleBuyNow()">Buy Now</button>
          <button class="btn-add-detail" onclick="handleAddToCart()">Add to Cart</button>
        </div>
      </div>
    </div>
  `;

  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
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
  if (!currentModalProduct) return;
  addToCart({
    name: currentModalProduct.name,
    price: currentModalProduct.basePrice, // Store unit price
    brand: currentModalProduct.brand,
    image: currentModalProduct.image,
    qty: currentModalProduct.qty,
    unit: currentModalProduct.unit
  });
  closeProductModal();
}

function handleBuyNow() {
  handleAddToCart();
  window.location.href = 'cart.html';
}

function closeProductModal() {
  const modal = document.getElementById('productModal');
  if (modal) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
  currentModalProduct = null;
}

// ─── ORDER FLOWS (MOCK) ───────────────────────────
function orderItem(id) {
  alert("Order Placed Successfully for this item! Thank you for shopping with MayaPets.");
  removeFromCart(id);
  location.reload();
}

function orderAll() {
  const cart = getCart();
  if (cart.length === 0) return alert("Your cart is empty!");
  alert("Success! Your order for " + cart.length + " items has been placed. Check your email for confirmation.");
  localStorage.removeItem(CART_STORAGE_KEY);
  updateCartBadge();
  location.reload();
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
