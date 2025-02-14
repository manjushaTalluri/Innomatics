// Product data with verified working image URLs
const products = [
    // Mobiles
    { id: 1, name: 'iPhone 14 Pro', price: 999.99, image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=500&auto=format', category: 'Mobiles' },
    { id: 2, name: 'Samsung Galaxy S23', price: 899.99, image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&auto=format', category: 'Mobiles' },
    { id: 3, name: 'Google Pixel 7', price: 799.99, image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&auto=format', category: 'Mobiles' },
    { id: 4, name: 'OnePlus 11', price: 699.99, image: 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=500&auto=format', category: 'Mobiles' },
    { id: 5, name: 'iPhone 13', price: 699.99, image: 'https://images.unsplash.com/photo-1592286927505-1def25115558?w=500&auto=format', category: 'Mobiles' },
    { id: 6, name: 'Samsung Fold', price: 1299.99, image: 'https://images.unsplash.com/photo-1567581935884-3349723552ca?w=500&auto=format', category: 'Mobiles' },
    { id: 7, name: 'Xiaomi 12 Pro', price: 749.99, image: 'https://images.unsplash.com/photo-1546054454-aa26e2b734c7?w=500&auto=format', category: 'Mobiles' },
    { id: 8, name: 'Nothing Phone', price: 649.99, image: 'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=500&auto=format', category: 'Mobiles' },
    { id: 9, name: 'Oppo Find X5', price: 899.99, image: 'https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=500&auto=format', category: 'Mobiles' },

    // Laptops
    { id: 10, name: 'MacBook Pro 16"', price: 1999.99, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&auto=format', category: 'Laptops' },
    { id: 11, name: 'Dell XPS 13', price: 1199.99, image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&auto=format', category: 'Laptops' },
    { id: 12, name: 'Lenovo ThinkPad', price: 999.99, image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500&auto=format', category: 'Laptops' },
    { id: 13, name: 'MacBook Air', price: 1299.99, image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=500&auto=format', category: 'Laptops' },
    { id: 14, name: 'HP Spectre', price: 1399.99, image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=500&auto=format', category: 'Laptops' },
    { id: 15, name: 'ASUS ROG', price: 1599.99, image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&auto=format', category: 'Laptops' },
    { id: 16, name: 'Razer Blade', price: 1799.99, image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500&auto=format', category: 'Laptops' },
    { id: 17, name: 'Acer Predator', price: 1499.99, image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&auto=format', category: 'Laptops' },
    { id: 18, name: 'Microsoft Surface', price: 1299.99, image: 'https://images.unsplash.com/photo-1537498425277-c283d32ef9db?w=500&auto=format', category: 'Laptops' },

    // Electronics
    { id: 19, name: 'AirPods Pro', price: 249.99, image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=500&auto=format', category: 'Electronics' },
    { id: 20, name: 'Apple Watch Ultra', price: 799.99, image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=500&auto=format', category: 'Electronics' },
    { id: 21, name: 'iPad Pro 12.9"', price: 1099.99, image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&auto=format', category: 'Electronics' },
    { id: 22, name: 'Sony A7 IV', price: 2499.99, image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&auto=format', category: 'Electronics' },
    { id: 23, name: 'PS5 Console', price: 499.99, image: 'https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=500&auto=format', category: 'Electronics' },
    { id: 24, name: 'Xbox Series X', price: 499.99, image: 'https://images.unsplash.com/photo-1621259182978-fbf433fd6eb7?w=500&auto=format', category: 'Electronics' },
    { id: 25, name: 'Samsung TV 65"', price: 1299.99, image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=500&auto=format', category: 'Electronics' },
    { id: 26, name: 'Bose Headphones', price: 349.99, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format', category: 'Electronics' },
    { id: 27, name: 'Nintendo Switch', price: 299.99, image: 'https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=500&auto=format', category: 'Electronics' }
];

// Initialize cart from localStorage or empty array
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentCategory = 'All';

// DOM elements
const productList = document.querySelector('.products');
const cartIcon = document.getElementById('cartIcon');
const cartPanel = document.getElementById('cartPanel');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const closeCart = document.getElementById('closeCart');
const emptyCart = document.getElementById('emptyCart');
const cartCount = document.querySelector('.cart-count');
const cartItemCount = document.getElementById('cartItemCount');
const checkoutBtn = document.getElementById('checkoutBtn');

// Filter products by category
function filterProducts() {
    return currentCategory === 'All' 
        ? products 
        : products.filter(p => p.category === currentCategory);
}

// Render products
function renderProducts() {
    console.log('Rendering products for category:', currentCategory); // Debug log
    
    const filteredProducts = filterProducts();
    
    console.log('Filtered products:', filteredProducts.length); // Debug log

    if (!productList) {
        console.error('Product list element not found!');
        return;
    }
    
    productList.innerHTML = filteredProducts.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="product-price">Rs. ${product.price}</p>
                <button class="add-to-cart" onclick="addToCart(${product.id})">
                    Add to Cart
                </button>
            </div>
        </div>
    `).join('');
}

// Initialize the application
function init() {
    // Set up navigation event listeners
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active class from all links
            document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
            
            // Add active class to clicked link
            link.classList.add('active');
            
            // Update current category and render products
            currentCategory = link.getAttribute('data-category');
            console.log('Switching to category:', currentCategory);
            renderProducts();
        });
    });

    // Initial render
    renderProducts();
    
    // Set up cart event listeners
    setupCartListeners();
}

// Call init when the document is loaded
document.addEventListener('DOMContentLoaded', init);

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Load cart when page loads
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded'); // Debug log
    
    // Initialize cart
    updateCart();
    
    // Add event listeners for cart
    document.getElementById('cartIcon').addEventListener('click', toggleCart);
    document.querySelector('.close-cart').addEventListener('click', toggleCart);

    // Add event listeners for category navigation
    const navLinks = document.querySelectorAll('.nav-links a');
    console.log('Nav links found:', navLinks.length); // Debug log

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Link clicked:', this.textContent); // Debug log
            
            // Remove active class from all links
            navLinks.forEach(a => a.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Update current category
            currentCategory = this.getAttribute('data-category');
            console.log('Current category:', currentCategory); // Debug log
            
            // Render filtered products
            renderProducts();
        });
    });

    // Initial render of all products
    renderProducts();
});

function showCategory(category) {
    // Hide all sections
    document.querySelectorAll('.product-section').forEach(section => {
        section.style.display = 'none';
    });

    // Show selected section
    const sectionId = category === 'Assignment4' ? 'home-section' : `${category}-section`;
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }

    // Update active state in navigation
    document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(category)) {
            link.classList.add('active');
        }
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }
    
    saveCart(); // Save to localStorage
    updateCart();
    const cartPanel = document.querySelector('.cart-panel');
    cartPanel.classList.add('cart-hidden');
}

function updateQuantity(productId, change) {
    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
        const newQuantity = cartItem.quantity + change;
        if (newQuantity > 0) {
            cartItem.quantity = newQuantity;
            saveCart(); // Save to localStorage
            updateCart();
        } else {
            removeFromCart(productId);
        }
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart(); // Save to localStorage
    updateCart();
}

function updateCart() {
    const cartItems = document.querySelector('.cart-items');
    const cartTotal = document.querySelector('.cart-total');
    const cartCount = document.querySelector('.cart-count');
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-shopping-cart"></i>
                <p>Your cart is empty</p>
            </div>
        `;
        cartTotal.innerHTML = `
            <div class="cart-total-row final">
                <span>Total:</span>
                <span>Rs. 0.00</span>
            </div>
        `;
        cartCount.textContent = '0';
        return;
    }

    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-left">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-right">
                <div class="cart-item-header">
                    <h4>${item.name}</h4>
                </div>
                <div class="cart-item-price">
                    Rs. ${item.price} x ${item.quantity}
                </div>
                <div class="cart-item-actions">
                    <div class="quantity-controls">
                        <button onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button onclick="updateQuantity(${item.id}, 1)">+</button>
                    </div>
                    <button class="remove-item" onclick="removeFromCart(${item.id})">Remove</button>
                </div>
            </div>
        </div>
    `).join('');

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.innerHTML = `
        <div class="cart-total-row final">
            <span>Total: Rs. ${total}</span>
        </div>
    `;

    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
}

function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = count;
}

// Update the cart panel toggle functionality
cartIcon.addEventListener('click', () => {
    cartPanel.classList.toggle('cart-hidden');
});

closeCart.addEventListener('click', () => {
    cartPanel.classList.remove('cart-hidden');
});

// Empty cart
emptyCart.addEventListener('click', () => {
    if (cart.length === 0) return;
    
    if (confirm('Are you sure you want to empty your cart?')) {
        cart = [];
        saveCart(); // Save empty cart to localStorage
        updateCart();
        showNotification('Cart has been emptied');
    }
});

// Enhanced checkout functionality with better success message
checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) {
        showNotification('Your cart is empty!');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    if (confirm(`Proceed to checkout? Total: $${total.toFixed(2)}`)) {
        // Show success message with order details
        const orderNumber = Math.floor(Math.random() * 1000000);
        showSuccessMessage(orderNumber, total);
        
        // Clear cart and update UI
        cart = [];
        saveCart(); // Save empty cart after checkout
        updateCart();
        cartPanel.classList.remove('cart-hidden');
    }
});

// Add success message function
function showSuccessMessage(orderNumber, total) {
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.innerHTML = `
        <div class="success-content">
            <i class="fas fa-check-circle"></i>
            <h2>Order Placed Successfully!</h2>
            <p>Order #${orderNumber}</p>
            <p>Total Amount: $${total.toFixed(2)}</p>
            <p>Thank you for shopping with us!</p>
            <button onclick="this.parentElement.parentElement.remove()">Continue Shopping</button>
        </div>
    `;
    document.body.appendChild(successDiv);
}

// Make sure products array is defined and accessible
console.log('Total products:', products.length); // Debug log