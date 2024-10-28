// userDao.js
/*
 DAO:
Wzorzec Data Access Object (DAO) służy do oddzielenia 
logiki biznesowej aplikacji od logiki dostępu do danych. 
Dzięki temu możemy łatwo zmieniać źródło danych (np. 
bazę danych, plik, usługę sieciową) bez wpływu 
na resztę aplikacji.
*/


export class UserDao {
    getAllUsers() {
        throw new Error("This method must be overriden in derived classes.");
    }

    getUser(id) {
        throw new Error("This method must be overriden in derived classes.");
    }

    updateUser(user) {
        throw new Error("This method must be overriden in derived classes.");
    }

    deleteUser(id) {
        throw new Error("This method must be overriden in derived classes.");
    }

    addUser(user) {
        throw new Error("This method must be overriden in derived classes.");
    }

    searchUsersByName(name) {
        throw new Error("This method must be overriden in derived classes.");
    }

    getUsersByAgeRange(minAge, maxAge) {
        throw new Error("This method must be overriden in derived classes.");
    }
}