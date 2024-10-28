
// businessService.spec.js

import BusinessService from '../businessService.js';

describe("BusinessService", () => {
    let service;

    beforeEach(() => {
        service = new BusinessService();
    });

    it("should create a product", () => {
        const product = service.createProduct("Console", 2000);
        expect(product.name).toEqual("Console");
    });

    it("should create an order", () => {
        const order = service.createOrder("Customer");
        expect(order.customerId).toEqual("Customer");
    });

    it("should add product to order", () => {
        const product = service.createProduct("Console", 2000);
        const order = service.createOrder("Customer");
        service.addProductToOrder(order.id, product.id);
        expect(order.products.length).toEqual(1);
    });

    it("should remove product from order", () => {
        const product = service.createProduct("Console", 2000);
        const order = service.createOrder("Customer");
        service.addProductToOrder(order.id, product.id);
        service.removeProductFromOrder(order.id, product.id);
        expect(order.products.length).toEqual(0);
    });

    it("should calculate total value of order", () => {
        const product1 = service.createProduct("Console", 2000);
        const product2 = service.createProduct("Laptop", 1200);
        const product3 = service.createProduct("Mouse", 70);
        const order = service.createOrder("Customer");
        service.addProductToOrder(order.id, product1.id); 
        service.addProductToOrder(order.id, product2.id); 
        service.addProductToOrder(order.id, product3.id); 
        expect(service.getOrderTotal(order.id)).toEqual(3270);
    });
});
