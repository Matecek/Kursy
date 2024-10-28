import { Pipe, OrderTotalFilter, DateSortFilter, CustomerLoyaltyDiscountFilter, LargeOrderSurchargeFilter } from './pipesAndFilters.js';

const orders = [
    { id: 1, date: "2022-01-01", total: 1000, customerLoyaltyPoints: 500, items: [1,2,3,4,5]  },
    { id: 2, date: "2022-01-05", total: 500, customerLoyaltyPoints: 100, items: [1,2]  },
    { id: 3, date: "2022-01-03", total: 200, customerLoyaltyPoints: 50, items: [1]  },
    { id: 4, date: "2022-01-02", total: 600, customerLoyaltyPoints: 200, items: [1,2,3]  },
];


const pipe = new Pipe();
pipe.addFilter(new OrderTotalFilter(200, 700));
pipe.addFilter(new DateSortFilter());
pipe.addFilter(new CustomerLoyaltyDiscountFilter(200, 10));
pipe.addFilter(new LargeOrderSurchargeFilter(4, 50));

const processedOrders = pipe.process(orders);
console.log(processedOrders);