// paymentMethods.js

// Wzorzec Dependency Injection pozwala na wstrzykiwanie
// zależności (takich jak usługi lub obiekty) do klas,
// zamiast tworzenia ich wewnątrz klasy. Ułatwia to testowanie,
// promuje zasadę pojedynczej odpowiedzialności
// (klasa powinna mieć tylko jeden powód do zmiany)
// i zwiększa elastyczność oraz skalowalność kodu.

// Zasada pojedynczej odpowiedzialności (Single Responsibility
// Principle, SRP) mówi, że klasa powinna mieć tylko jeden powód
// do zmiany. Innymi słowy, klasa powinna mieć tylko jedno zadanie
// lub odpowiedzialność.
// W podanym kodzie zasada pojedynczej odpowiedzialności jest
// promowana w następujący sposób:
// Klasy metod płatności (CreditCardPayment, PayPalPayment itp.):
// Każda z tych klas ma jedno konkretne zadanie: przetwarzanie
// płatności w określony sposób.
// Jeśli chcielibyśmy wprowadzić zmiany w sposobie przetwarzania
// płatności przez kartę kredytową, zmienilibyśmy tylko klasę
// CreditCardPayment, nie wpływając na inne metody płatności.
// Klasy metod dostawy (CourierDelivery, InStorePickup itp.):

export class CreditCardPayment {
    process(amount) {
        return `Processed payment of ${amount} using Credit Card.`;
    }
}

export class PaypalPayment {
    process(amount) {
        return `Processed payment of ${amount} using Paypal.`;
    }
}

export class BitCoinPayment {
    process(amount) {
        return `Processed payment of ${amount} using BitCoin.`;
    }
}

// Podobnie jak w przypadku metod płatności, każda klasa dostawy
// ma jedno zadanie: dostarczenie produktu w określony sposób.
// Jeśli chcielibyśmy wprowadzić zmiany w sposobie dostarczania
// produktu kurierem, zmienilibyśmy tylko klasę CourierDelivery,
// nie wpływając na inne metody dostawy.
// Klasa Order:

// Główną odpowiedzialnością klasy Order jest zarządzanie
// zamówieniem.
// Nie zajmuje się ona szczegółami dotyczącymi przetwarzania
// płatności ani dostawy produktu. Zamiast tego te odpowiedzialności
// są delegowane do odpowiednich klas metod płatności i dostawy.
// Dzięki temu, jeśli chcielibyśmy wprowadzić zmiany w logice
// zarządzania zamówieniami, zmienilibyśmy tylko klasę Order,
// nie wpływając na metody płatności ani dostawy.
