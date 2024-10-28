import { CreditCardPayment, PaypalPayment, BitCoinPayment } from "../paymentMethods.js";
import { CourierDelivery, DroneDelivery, PickupPointDelivery } from "../deliveryMethods.js";
import { Order } from "../order.js";

describe("Order with Dependency Injection", () => {
    let creditCardPayment, payPalPayment, bitCoinPayment;
    let courierDelivery, droneDelivery, pickupPointDelivery;

    beforeEach(() => {
        creditCardPayment = new CreditCardPayment();
        payPalPayment = new PaypalPayment();
        bitCoinPayment = new BitCoinPayment();

        courierDelivery = new CourierDelivery();
        droneDelivery = new DroneDelivery();
        pickupPointDelivery = new PickupPointDelivery();
    });

    it("should process order with credit card payment and courier", () => {
        const order = new Order(creditCardPayment, courierDelivery);
        const result = order.checkout(100, "ORD123");
        expect(result).toBe(`Processed payment of 100 using Credit Card. Order ORD123 will be delivered by courier.`);
    });

    it("should process order with paypal payment and drone", () => {
        const order = new Order(payPalPayment, droneDelivery);
        const result = order.checkout(200, "ORD124");
        expect(result).toBe(`Processed payment of 200 using Paypal. Order ORD124 will be delivered by drone.`);
    });

    it("should process order with BTC payment and pickup point", () => {
        const order = new Order(bitCoinPayment, pickupPointDelivery);
        const result = order.checkout(300, "ORD125");
        expect(result).toBe(`Processed payment of 300 using BitCoin. Order ORD125 can be picked up from the designated point.`);
    });

    it("should allow change of payment and delivery", () => {
        const order = new Order(creditCardPayment, courierDelivery);
        order.changeDeliveryMethod(droneDelivery);
        order.changePaymentMethod(payPalPayment);
        const result = order.checkout(400, "ORD126");
        expect(result).toBe(`Processed payment of 400 using Paypal. Order ORD126 will be delivered by drone.`);
    });
});