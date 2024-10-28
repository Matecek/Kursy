// main.js

import EventAggregator from "./eventAggregator.js";
import User from "./user.js";
import ChatRoom from "./chatRoom.js";
import NotificationService from "./notificationService.js";

const eventAggregator = new EventAggregator();
const alice = new User(1, "Alice", eventAggregator);
const bob = new User(2, "Bob", eventAggregator);
const generalChat = new ChatRoom("General", eventAggregator);
const notificationService = new NotificationService(eventAggregator);

alice.sendMessage("Hello, Bob");
bob.sendMessage("Hello, Alice");
bob.changeName("Robert");