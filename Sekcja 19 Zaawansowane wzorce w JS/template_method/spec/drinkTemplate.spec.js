// spec/drinkTemplate.spec.js

import { Tea } from '../tea.js';
import { Coffee } from '../coffee.js';

describe("Template method - drink preparation", () => {
    let tea, coffee;

    beforeEach(() => {
        tea = new Tea();
        coffee = new Coffee();
    });

    it("should prepare tea correctly", () => {
        spyOn(tea, "boilWater").and.callThrough();
        spyOn(tea, "brew").and.callThrough();
        spyOn(tea, "pourInCup").and.callThrough();
        spyOn(tea, "addCondimnets").and.callThrough();

        tea.prepareDrink();

        expect(tea.boilWater).toHaveBeenCalled();
        expect(tea.brew).toHaveBeenCalled();
        expect(tea.pourInCup).toHaveBeenCalled();
        expect(tea.addCondimnets).toHaveBeenCalled();
    });

    it("should prepare coffee correctly", () => {
        spyOn(coffee, "boilWater").and.callThrough();
        spyOn(coffee, "brew").and.callThrough();
        spyOn(coffee, "pourInCup").and.callThrough();
        spyOn(coffee, "addCondimnets").and.callThrough();

        coffee.prepareDrink();

        expect(coffee.boilWater).toHaveBeenCalled();
        expect(coffee.brew).toHaveBeenCalled();
        expect(coffee.pourInCup).toHaveBeenCalled();
        expect(coffee.addCondimnets).toHaveBeenCalled();
    });
});
