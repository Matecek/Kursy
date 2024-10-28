// spec/supportHandler.spec.js

import { Client } from '../client.js';

describe("Chain of responsibility - Support handling", () => {
    let client;

    beforeEach(() => {
        client = new Client();
    });

    it("should be handled by first line support", () => {
        const request = { level: 1, description: "Simple issue" };
        expect(client.submitRequest(request)).toBe(`First line support handles the request: Simple issue`);
    });

    it("should be handled by second line support", () => {
        const request = { level: 2, description: "Complex issue" };
        expect(client.submitRequest(request)).toBe(`Technical specialist handles the request: Complex issue`);
    });

    it("should be handled by third line support", () => {
        const request = { level: 3, description: "Very complex issue" };
        expect(client.submitRequest(request)).toBe(`Manager handles the request: Very complex issue`);
    });

    it("should not be handled by anyone", () => {
        const request = { level: 4, description: "Most complex issue" };
        expect(client.submitRequest(request)).toBeNull();
    });

    it("should not be handled by anyone without level", () => {
        const request = { description: "Most complex issue" };
        expect(client.submitRequest(request)).toBeNull();
    });

    it("should be handled by third line support without description", () => {
        const request = { level: 3 };
        expect(client.submitRequest(request)).toBe(`Manager handles the request: undefined`);
    });

    
});