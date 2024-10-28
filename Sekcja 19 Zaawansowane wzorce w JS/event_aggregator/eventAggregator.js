// eventAggregator.js
// Wzorzec Event Aggregator służy do centralizacji obsługi zdarzeń w jednym obiekcie, 
// który pośredniczy w komunikacji między różnymi obiektami w systemie. 
// Dzięki temu różne komponenty mogą komunikować się ze sobą przez
// Event Aggregator, zamiast komunikować się bezpośrednio między sobą.

class EventAggregator {
    constructor() {
        this.events = [];
    }

    subscribe(eventName, callback) {
        if(!this.events[eventName]) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(callback);
    }

    publish(eventName, data) {
        if (this.events[eventName]) {
            this.events[eventName].forEach(callback => callback(data));
        }
    }
}

export default EventAggregator;