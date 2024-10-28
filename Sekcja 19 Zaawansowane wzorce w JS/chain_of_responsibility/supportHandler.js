// supportHandler.js
/*
Chain of Responsibility to wzorzec projektowy, który pozwala na przekazywanie żądań wzdłuż 
łańcucha potencjalnych obsługiwanych obiektów, aż jedno z nich obsłuży żądanie. 
Głównym celem tego wzorca jest oddzielenie obiektu wysyłającego żądanie od obiektu, 
który je obsługuje, dając więcej niż 
jednemu obiektowi szansę na obsługę żądania.

Zalety:

Zwiększa elastyczność w przypisywaniu odpowiedzialności do obiektów.
Umożliwia dodawanie nowych obsługiwanych obiektów do systemu z minimalnymi zmianami kodu.
Wady:

Nie jest gwarantowane, że żądanie zostanie obsłużone, jeśli żaden z obiektów w łańcuchu 
nie jest w stanie go obsłużyć.
Może wprowadzić pewne opóźnienia, ponieważ żądanie jest przekazywane wzdłuż łańcucha.
Przykład: Załóżmy, że mamy system obsługi zgłoszeń wsparcia technicznego. Klient może 
zgłosić problem, który jest przekazywany wzdłuż łańcucha obsługiwanych obiektów - od 
pierwszej linii wsparcia, przez specjalistę technicznego, aż do menedżera, jeśli 
problem jest bardzo skomplikowany.
*/


// supportHandler.js

export class SupportHandler {
    constructor(level) {
        this.level = level;
        this.nextHandler = null;
    }

    setNextHandler(handler) {
        this.nextHandler = handler;
    }

    handleRequest(request) {
        if (this.level === request.level) {
            return this.process(request);
        }

        if (this.nextHandler) {
            return this.nextHandler.handleRequest(request);
        }

        return null;
    }

    process(request) {
        throw new Error("Method must be implemented in derived class");
    }
}