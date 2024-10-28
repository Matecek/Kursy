// drinkTemplate.js

/*  
Wzorzec "Template Method" polega na definiowaniu 
struktury algorytmu w metodzie szablonowej w klasie 
bazowej, ale opóźnia niektóre kroki do klas pochodnych. 
Klasy pochodne mogą przesłaniać kroki algorytmu bez 
zmiany jego struktury.

Przykład: Stworzymy system do przygotowywania różnych 
rodzajów herbaty i kawy. 
*/

// Klasa bazowa definiująca metodę szablonową
export class DrinkTemplate {
    prepareDrink() {
        this.boilWater();
        this.brew();
        this.pourInCup();
        this.addCondimnets();
    }

    boilWater() {
        console.log("Boiling water");
    }

    pourInCup() {
        console.log("Pouring into cup");
    }

    // metody do przesłonięcia
    brew() {}
    addCondimnets() {}
}
