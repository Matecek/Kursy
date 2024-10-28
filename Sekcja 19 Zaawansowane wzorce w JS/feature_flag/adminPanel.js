// adminPanel.js
import FeatureService from './featureService.js';

export default class AdminPanel {
    constructor () {
        this.featureService = new FeatureService();
    }

    toggleFeature(featureName) {
        if (this.featureService.featureFlag.isFeatureEnabled(featureName)) {
            this.featureService.featureFlag.disableFeature(featureName);
        } else {
            this.featureService.featureFlag.enableFeature(featureName);
        }
    }
}