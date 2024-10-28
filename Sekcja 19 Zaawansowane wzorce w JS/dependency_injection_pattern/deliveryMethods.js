export class CourierDelivery {
    deliver(orderId) {
        return `Order ${orderId} will be delivered by courier.`;
    }
}

export class DroneDelivery {
    deliver(orderId) {
        return `Order ${orderId} will be delivered by drone.`;
    }
}

export class PickupPointDelivery {
    deliver(orderId) {
        return `Order ${orderId} can be picked up from the designated point.`;
    }
}
