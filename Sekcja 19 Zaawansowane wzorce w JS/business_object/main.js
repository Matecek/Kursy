import BusinessService from './businessService.js';

const service = new BusinessService();

const laptop = service.createProduct("Laptop", 1000);
const mouse = service.createProduct("Mouse", 50);

const order1 = service.createOrder("John");
service.addProductToOrder(order1.id, laptop.id);
service.addProductToOrder(order1.id, mouse.id);

console.log("Order total price:", service.getOrderTotal(order1.id));