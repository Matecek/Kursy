// user.js
/*
DAO:
Wzorzec Data Access Object (DAO) służy do oddzielenia 
logiki biznesowej aplikacji od logiki dostępu do danych. 
Dzięki temu możemy łatwo zmieniać źródło danych 
(np. bazę danych, plik, usługę sieciową) bez wpływu 
na resztę aplikacji.
*/


export class User {
    constructor(id, name, email, age, address) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.age = age;
        this.address = address;
    }
}
