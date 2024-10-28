// product.spec.js
import Product from '../product.js';

describe("Product", () => {
    let product;

    beforeEach(() => {
        product = new Product(1, "Laptop", 1000)
    });

    it("should create product", () => {
        expect(product.id).toEqual(1);
        expect(product.name).toEqual("Laptop");
        expect(product.price).toEqual(1000);
    });
});