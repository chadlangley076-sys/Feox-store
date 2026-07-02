// Cart functionality
let cart = [];

// Add to cart button functionality
document.querySelectorAll('.add-to-cart').forEach((button, index) => {
    button.addEventListener('click', function() {
        const productCard = this.closest('.product-card');
        const productName = productCard.querySelector('h3').textContent;
        const productPrice = productCard.querySelector('.price').textContent;
        
        const cartItem = {
            id: index,
            name: productName,
            price: productPrice
        };
        
        cart.push(cartItem);
        alert(`${productName} added to cart!`);
        updateCartCount();
    });
});

// Update cart count
function updateCartCount() {
    const cartIcon = document.querySelector('.cart-icon');
    if (cart.length > 0) {
        cartIcon.textContent = `🛒 Cart (${cart.length})`;
    }
}

// Shop Now button
document.querySelector('.cta-btn').addEventListener('click', function() {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
});

// Contact form submission
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    this.reset();
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});