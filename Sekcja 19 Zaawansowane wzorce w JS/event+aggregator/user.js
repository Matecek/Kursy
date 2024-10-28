// user.js

class User {
    constructor(id, name, eventAggregator) {
        this.id = id;
        this.name = name;
        this.eventAggregator = eventAggregator;
    }

    sendMessage(message) {
        console.log(`${this.name} sent message: ${message}`);
        this.eventAggregator.publish("messageSent", { userId: this.id, message });
    }

    changeName(newName) { 
        this.eventAggregator.publish("nameChanged", { userId: this.id, newName });
    }
}

export default User;
