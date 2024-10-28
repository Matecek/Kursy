// pipesAndFilters.spec.js

import { Pipe, OrderTotalFilter, DateSortFilter, CustomerLoyaltyDiscountFilter, LargeOrderSurchargeFilter } from '../pipesAndFilters.js';

describe("Pipes and Filters Pattern", () => {
    let orders;
    let pipe;

    beforeEach(() => {
        orders = [
            { id: 1, date: "2022-01-01", total: 1000, customerLoyaltyPoints: 500, items: [1,2,3,4,5]  },
            { id: 2, date: "2022-01-05", total: 500, customerLoyaltyPoints: 100, items: [1,2]  },
            { id: 3, date: "2022-01-03", total: 200, customerLoyaltyPoints: 50, items: [1]  },
            { id: 4, date: "2022-01-02", total: 600, customerLoyaltyPoints: 200, items: [1,2,3]  },
        ];

        pipe = new Pipe();
    });

    it("should filter orders by total", () => {
        pipe.addFilter(new OrderTotalFilter(300, 1000));
        const result = pipe.process(orders);
        expect(result.length).toBe(3);
        expect(result).not.toContain(orders[2]);
    });

    it("should filter orders with sorting by date", () => {
        pipe.addFilter(new DateSortFilter());
        const result = pipe.process(orders);
        expect(result[0].id).toBe(1);
        expect(result[1].id).toBe(4);
        expect(result[2].id).toBe(3);
        expect(result[3].id).toBe(2);
    });

    it("should apply discount to orders", () => {
        pipe.addFilter(new CustomerLoyaltyDiscountFilter(200, 10));
        const result = pipe.process(orders);
        expect(result[0].total).toBe(900);
        expect(result[1].total).toBe(500);
        expect(result[2].total).toBe(200);
        expect(result[3].total).toBe(540);
    });

    it("should apply surcharge to orders", () => {
        pipe.addFilter(new LargeOrderSurchargeFilter(4, 50));
        const result = pipe.process(orders);
        expect(result[0].total).toBe(1050);
        expect(result[1].total).toBe(500);
        expect(result[2].total).toBe(200);
        expect(result[3].total).toBe(600);
    });
});