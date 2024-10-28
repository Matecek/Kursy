// notificationService.js

class NotificationService {
    constructor(eventAggregator) {
        this.eventAggregator = eventAggregator;
        
        this.eventAggregator.subscribe("messageSent", (data) => {
            console.log(`[Notification] Message sent by User-${data.userId}: ${data.message}`);
        });
        
        this.eventAggregator.subscribe("nameChanged", (data) => {
            console.log(`[Notification] User-${data.userId} changed name to: ${data.newName}`);
        });
    }
}

export default NotificationService;
