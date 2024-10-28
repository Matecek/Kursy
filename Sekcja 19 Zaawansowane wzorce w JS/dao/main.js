// main.js

import { User } from "./user.js";
import { Address } from "./address.js";
import { UserDaoImpl } from "./userDaoImpl.js";

const address1 = new Address("Street 1", "Warsaw", "12345", "Poland");
const user1 = new User(1, "Andrew Willis", "andre@example.com", 25, address1);

const address2 = new Address("Street 10", "Krk", "35479", "Poland");
const user2 = new User(2, "Kazik Willis", "andre@example.com", 30, address2);

const userDao = new UserDaoImpl();

userDao.addUser(user1);
userDao.addUser(user2);

const retrivedUser = userDao.getUser(1);
console.log("user1: ", retrivedUser);

const updatedAddress = new Address("Wilcza 4", "Warsaw", "79865", "Poland");
const updatedUser = new User(1, "Andrew Willis", "andrew@example.com", 25, updatedAddress);
userDao.updateUser(updatedUser);
console.log("user1 updated: ", userDao.getUser(1));


console.log("users1: ", userDao.searchUsersByName("Kazik"));
console.log("users2: ", userDao.getUsersByAgeRange(20, 55));

userDao.deleteUser(2);
console.log("users3: ", userDao.getAllUsers());
