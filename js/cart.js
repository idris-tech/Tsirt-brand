class CartManager {
    constructor() {
        this.cart = JSON.parse(localStorage.getItem('t-shirt-cart')) || [];
        this.init();
    }

    init() {
        this.updateCartCount();
    }

    get items() {
        return this.cart;
    }

    addItem(product, quantity = 1, size = 'M', color = 'White') {
        // Handle case where product object already contains quantity/size/color
        const qty = product.quantity || parseInt(quantity);
        const sz = product.size || size;
        const clr = product.color || color;

        const existingItem = this.cart.find(item => 
            String(item.id) === String(product.id) && item.size === sz && item.color === clr
        );

        if (existingItem) {
            existingItem.quantity += parseInt(qty);
        } else {
            this.cart.push({
                ...product,
                quantity: parseInt(qty),
                size: sz,
                color: clr
            });
        }

        this.saveCart();
        this.updateCartCount();
        this.showToast(`${product.name} added to cart!`);
    }

    removeItem(id, size, color) {
        this.cart = this.cart.filter(item => 
            !(String(item.id) === String(id) && item.size === size && item.color === color)
        );
        this.saveCart();
        this.updateCartCount();
    }

    updateQuantity(id, size, color, quantity) {
        const item = this.cart.find(item => 
            String(item.id) === String(id) && item.size === size && item.color === color
        );
        if (item) {
            item.quantity = Math.max(1, parseInt(quantity));
            this.saveCart();
            this.updateCartCount();
        }
    }

    getCartTotal() {
        return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    getCartCount() {
        return this.cart.reduce((count, item) => count + item.quantity, 0);
    }

    saveCart() {
        localStorage.setItem('t-shirt-cart', JSON.stringify(this.cart));
    }

    updateCartCount() {
        const cartCounts = document.querySelectorAll('.cart-count');
        cartCounts.forEach(el => el.textContent = this.getCartCount());
    }

    showToast(message) {
        const toast = document.getElementById('toast');
        if (toast) {
            toast.textContent = message;
            toast.classList.add('show');
            setTimeout(() => {
                toast.classList.remove('show');
            }, 3000);
        }
    }

    clearCart() {
        this.cart = [];
        this.saveCart();
        this.updateCartCount();
    }
}

const cartManager = new CartManager();
