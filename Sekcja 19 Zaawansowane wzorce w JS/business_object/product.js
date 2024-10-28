/**
 * Plik: product.js
 * 
 * Reprezentuje produkt w sklepie.
 *
 * Wzorzec Business Object Pattern polega na enkapsulacji logiki biznesowej 
 * w dedykowanych obiektach.
 * Te obiekty są odpowiedzialne za operacje biznesowe, takie 
 * jak walidacja, obliczenia czy operacje na danych.
 */

class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

export default Product;

