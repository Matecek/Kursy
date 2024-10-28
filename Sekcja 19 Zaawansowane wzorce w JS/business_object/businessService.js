/**
 * Plik: businessService.js
 * 
 * Klasa BusinessService zarządza obiektami biznesowymi i koordynuje ich działania.
 */

import Product from "./product.js";
import Order from "./order.js";

class BusinessService {
    constructor() {
        this.products = [];
        this.orders = [];
    }

    createProduct(name, price) {
        const product = new Product(this.products.length + 1, name, price);
        this.products.push(product);
        return product;
    }

    createOrder(customerId) {
        const order = new Order(this.orders.length + 1, customerId);
        this.orders.push(order);
        return order;
    }

    addProductToOrder(orderId, productId) {
        const order = this.orders.find(order => order.id === orderId);
        const product = this.products.find(product => product.id === productId);
        order.addProduct(product);
    }

    removeProductFromOrder(orderId, productId) {
        const order = this.orders.find(order => order.id === orderId);
        order.removeProduct(productId);
    }

    getOrderTotal(orderId) {
        const order = this.orders.find(order => order.id === orderId);
        return order.getTotal();
    }
}

export default BusinessService;