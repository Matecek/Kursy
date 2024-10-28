// main.js
import FeatureService from './featureService.js';
import User from './user.js';
import AdminPanel from './adminPanel.js';

const featureService = new FeatureService();
const alice = new User(1, "Alice", "admin");
const bob = new User(2, "Bob", "regular");
const adminPanel = new AdminPanel();

featureService.enableFeatureForUserType("newUI", "admin");
adminPanel.toggleFeature("newUI");

console.log("Alice admin, feature access:", featureService.isFeatureEnabledForUser("newUI", alice));
console.log("Bob regular, feature access:", featureService.isFeatureEnabledForUser("newUI", bob));
