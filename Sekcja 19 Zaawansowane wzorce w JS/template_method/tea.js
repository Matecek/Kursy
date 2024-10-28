// tea.js

import { DrinkTemplate } from './drinkTemplate.js';

export class Tea extends DrinkTemplate {
    brew() {
        console.log("Steeping the tea");
    }

    addCondimnets() {
        console.log("Adding lemon");
    }
}