/**
 * Plik: pipesAndFilters.js
 * 
 * Wzorzec Pipes and Filters (Rury i Filtry) polega 
 * na przetwarzaniu danych poprzez serię etapów,
 * gdzie każdy etap jest reprezentowany przez filtr. 
 * Dane przepływają przez rury między kolejnymi filtrami.
 * 
 * Zalety:
 * - Łatwość w komponowaniu różnych operacji.
 * - Możliwość wielokrotnego użycia filtrów.
 * - Elastyczność w dodawaniu nowych filtrów.
 * 
 * Wady:
 * - Może być mniej wydajny niż monolityczne podejście 
 * z powodu przepływu danych między filtrami.
 * 
 * W tym kodzie wzorzec jest zastosowany do przetwarzania 
 * listy zamówień. Zamówienia są filtrowane, sortowane
 * i przekształcane przez różne filtry.
 */

export class Pipe {
    constructor() {
        this.filters = [];
    }

    addFilter(filter) {
        this.filters.push(filter);
    }

    process(input) {
        return this.filters.reduce((acc, filter) => filter.execute(acc), input);
    }
}

export class Filter {
    execute(input) {
        throw new Error("Method execute() must be implemented");
    }
}

export class OrderTotalFilter extends Filter {
    constructor(minTotal, maxTotal) {
        super();
        this.minTotal = minTotal;
        this.maxTotal = maxTotal;
    }

    execute(orders) {
        return orders.filter(order => order.total >= this.minTotal
            && order.total <= this.maxTotal)
    }
}

export class DateSortFilter extends Filter {
    execute(orders) {
        return orders.sort((a, b) => new Date(a.date) - new Date(b.date));
    }
}

export class CustomerLoyaltyDiscountFilter extends Filter {
    constructor(loyaltyThreshold, discountPercentage) {
        super();
        this.loyaltyThreshold = loyaltyThreshold; // kwota min np 200
        this.discountPercentage = discountPercentage;
    }

    execute(orders) {
        return orders.map(order => {
            if (order.customerLoyaltyPoints >= this.loyaltyThreshold) {
                return {
                    ...order,
                    total: order.total * (1 - this.discountPercentage / 100)
                };
            }
            return order;
        });
    }
}

export class LargeOrderSurchargeFilter extends Filter {
    constructor(itemThreshold, surchargeAmount) {
        super();
        this.itemThreshold = itemThreshold;
        this.surchargeAmount = surchargeAmount; // dopłata
    }

    execute(orders) {
        return orders.map(order => {
            if (order.items.length >= this.itemThreshold) {
                return {
                    ...order,
                    total: order.total + this.surchargeAmount
                };
            }

            return order;
        });
    }
}
