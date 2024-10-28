// userDaoImpl.js
import { UserDao } from "./userDao.js";

export class UserDaoImpl extends UserDao {
    constructor() {
        super();
        this.users = new Map();
    }

    getAllUsers() {
        return [...this.users.values()];
    }

    getUser(id) {
        return this.users.get(id);
    }

    updateUser(user) {
        if (this.users.has(user.id)) {
            this.users.set(user.id, user);
            return true;
        }

        return false;
    }

    deleteUser(id) {
        return this.users.delete(id);
    }

    addUser(user) {
        if (!this.users.has(user.id)) {
            this.users.set(user.id, user);
            return true;
        }

        return false;
    }

    searchUsersByName(name) {  
        return [...this.users.values()].filter(user => user.name.includes(name));
    }

    getUsersByAgeRange(minAge, maxAge) {
        return [...this.users.values()].filter(user => user.age >= minAge && user.age <= maxAge);
    }
}