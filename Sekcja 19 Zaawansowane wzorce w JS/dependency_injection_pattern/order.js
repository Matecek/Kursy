// W konstruktorze klasy Order przyjmujemy dwa argumenty: paymentMethod i deliveryMethod.
// Te argumenty są zależnościami dla klasy Order. Zamiast tworzyć te zależności wewnątrz klasy Order,
// dostarczamy je z zewnątrz podczas tworzenia obiektu klasy Order.
// Metody changePaymentMethod() i changeDeliveryMethod() pozwalają na zmianę zależności
// (metody płatności i dostawy) po utworzeniu obiektu klasy Order. Dzięki temu możemy dynamicznie
// dostarczać różne metody płatności i dostawy bez konieczności modyfikowania wewnętrznej logiki klasy Order,
// na tym polega Dependency Injection

import {
    CreditCardPayment,
    PaypalPayment,
    BitCoinPayment,
} from "./paymentMethods.js";
import {
    CourierDelivery,
    DroneDelivery,
    PickupPointDelivery,
} from "./deliveryMethods.js";

export class Order {
    constructor(paymentMethod, deliveryMethod) {
        this.paymentMethod = paymentMethod;
        this.deliveryMethod = deliveryMethod;
    }

    changePaymentMethod(newPaymentMethod) {
        this.paymentMethod = newPaymentMethod;
    }

    changeDeliveryMethod(newDeliveryMethod) {
        this.deliveryMethod = newDeliveryMethod;
    }

    checkout(amount, orderId) {
        const paymentResult = this.paymentMethod.process(amount);
        const deliveryResult = this.deliveryMethod.deliver(orderId);
        return `${paymentResult} ${deliveryResult}`;
    }
}
