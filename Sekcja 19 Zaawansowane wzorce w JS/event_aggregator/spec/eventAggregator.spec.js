// spec/eventAggregator.spec.js
import EventAggregator from '../eventAggregator.js';
import User from '../user.js';
import ChatRoom from '../chatRoom.js';
import NotificationService from '../notificationService.js';

describe("Event Aggregator", () => {
    let eventAggregator, alice, bob, generalChat, notificationService;

    beforeEach(() => {
        eventAggregator = new EventAggregator();
        alice = new User(1, "Alice", eventAggregator);
        bob = new User(2, "Bob", eventAggregator);
        generalChat = new ChatRoom("General", eventAggregator);
        notificationService = new NotificationService(eventAggregator);
    });

    it("should notify chat room ad notification service when a user sends a message", () => {
        spyOn(console, "log");
        alice.sendMessage("Hi, Bob!");
        expect(console.log).toHaveBeenCalledWith(`[ChatRoom-General] User-1 says: Hi, Bob!`); 
        expect(console.log).toHaveBeenCalledWith(`[Notification] Message sent by User-1: Hi, Bob!`);           
    }); 
});