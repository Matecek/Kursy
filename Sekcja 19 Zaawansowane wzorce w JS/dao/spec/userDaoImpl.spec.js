// spec/userDaoImpl.spec.js

import { UserDaoImpl } from "../userDaoImpl.js";
import { User } from "../user.js";
import { Address } from "../address.js";

describe("UserDaoImpl", () => {
    let userDao;

    beforeEach(() => {
        userDao = new UserDaoImpl();
    });

    it("should add a user", () => {
        const address = new Address("Wilcza 4", "Warsaw", "79865", "Poland");
        const user = new User(1, "Andrew Willis", "andrew@example.com", 25, address);
        expect(userDao.addUser(user)).toBe(true);
    });

    it("should not add a user with duplicate id", () => {
        const address1 = new Address("Wilcza 4", "Warsaw", "79865", "Poland");
        const user1 = new User(1, "Andrew Willis", "andrew@example.com", 25, address1);
        userDao.addUser(user1);

        const address2 = new Address("Wilcza 5", "Warsaw", "79865", "Poland");
        const user2 = new User(1, "John Willis", "john@example.com", 25, address2);
        expect(userDao.addUser(user2)).toBe(false);
    });

    it("should get a user by id", () => {
        const address = new Address("Wilcza 4", "Warsaw", "79865", "Poland");
        const user = new User(1, "Andrew Willis", "andrew@example.com", 25, address);
        userDao.addUser(user)

        expect(userDao.getUser(1)).toEqual(user);
    });

    it("should update a user", () => {
        const address = new Address("Wilcza 4", "Warsaw", "79865", "Poland");
        const user = new User(1, "Andrew Willis", "andrew@example.com", 25, address);
        userDao.addUser(user);

        const address2 = new Address("Wilcza 40", "Warsaw", "1111", "Poland");
        const user2 = new User(1, "Olek Willis", "olek@example.com", 26, address2);

        expect(userDao.updateUser(user2)).toBe(true);
        expect(userDao.getUser(1)).toEqual(user2);
    });

    it("should delete a user", () => {
        const address = new Address("Wilcza 4", "Warsaw", "79865", "Poland");
        const user = new User(1, "Andrew Willis", "andrew@example.com", 25, address);
        userDao.addUser(user); 
        expect(userDao.deleteUser(1)).toBe(true);
        expect(userDao.getUser(1)).toBeUndefined();
    });

    it("should get users by name", () => {
        const address1 = new Address("Wilcza 4", "Warsaw", "79865", "Poland");
        const user1 = new User(1, "Andrew Willis", "andrew@example.com", 25, address1);
        userDao.addUser(user1);

        const address2 = new Address("Wilcza 40", "Warsaw", "1111", "Poland");
        const user2 = new User(2, "Andrew Willis", "olek@example.com", 26, address2);
        userDao.addUser(user2);

        const result = userDao.searchUsersByName("Andrew"); 
        expect(result.length).toBe(2);
    });

    it("should get users by age range", () => {
        const address1 = new Address("Wilcza 4", "Warsaw", "79865", "Poland");
        const user1 = new User(1, "Andrew Willis", "andrew@example.com", 25, address1);
        userDao.addUser(user1);

        const address2 = new Address("Wilcza 40", "Warsaw", "1111", "Poland");
        const user2 = new User(2, "Andrew Willis", "olek@example.com", 26, address2);
        userDao.addUser(user2);

        const result = userDao.getUsersByAgeRange(20, 50); 
        expect(result.length).toBe(2);
    });
})

