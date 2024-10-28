
// order.spec.js

import Order from '../order.js';
import Product from '../product.js';

describe("Order", () => {
    let order, product;

    beforeEach(() => {
        order = new Order(1, "Customer1");
        product = new Product(1, "Laptop", 1000);
    });

    it("should add product to order", () => {
        order.addProduct(product);
        expect(order.products.length).toEqual(1);
    });

    it("should remove product from order", () => {
        order.addProduct(product);
        order.removeProduct(product.id);
        expect(order.products.length).toEqual(0);
    });

    it("should calculate order value", () => {
        order.addProduct(product);
        order.addProduct(new Product(1, "Phone", 500));
        expect(order.getTotal()).toEqual(1500);
    });
});
