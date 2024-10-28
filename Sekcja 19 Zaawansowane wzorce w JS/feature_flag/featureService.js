// featureService.js
import FeatureFlag from './featureFlag.js';

export default class FeatureService {
    constructor() {
        this.featureFlag = new FeatureFlag();
    }

    enableFeatureForUserType(featureName, userType) {
        if (userType === "admin") {
            this.featureFlag.enableFeature(featureName);
        }
    }

    isFeatureEnabledForUser(featureName, user) {
        if (user.userType === "admin") {
            return this.featureFlag.isFeatureEnabled(featureName);
        }

        return false;
    }
}

