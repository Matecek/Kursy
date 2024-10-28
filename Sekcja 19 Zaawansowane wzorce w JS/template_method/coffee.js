// coffee.js

import { DrinkTemplate } from './drinkTemplate.js';

export class Coffee extends DrinkTemplate {
    brew() {
        console.log("Dripping coffee through filter");
    }

    addCondimnets() {
        console.log("Adding milk");
    }
}
