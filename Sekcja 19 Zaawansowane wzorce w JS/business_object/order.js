/**
 * Plik: order.js
 * 
 * Reprezentuje zamówienie w sklepie.
 */

class Order {
    constructor(id, customerId) {
        this.id = id;
        this.customerId = customerId;
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
    }

    removeProduct(productId) {
        this.products = this.products.filter( p => p.id !== productId);
    }

    getTotal() {
        return this.products.reduce((acc, product) => acc + product.price, 0);
    }
}

export default Order;