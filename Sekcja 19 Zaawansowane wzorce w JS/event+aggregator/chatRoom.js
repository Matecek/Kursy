// chatRoom.js

class ChatRoom {
    constructor(roomName, eventAggregator) {
        this.roomName = roomName;
        this.eventAggregator = eventAggregator;
        
        this.eventAggregator.subscribe("messageSent", (data) => {
            console.log(`[ChatRoom-${this.roomName}] User-${data.userId} says: ${data.message}`);
        });
        
        this.eventAggregator.subscribe("nameChanged", (data) => {
            console.log(`[ChatRoom-${this.roomName}] User-${data.userId} changed name to: ${data.newName}`);
        });
    }
}

export default ChatRoom;
