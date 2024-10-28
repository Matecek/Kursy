// featureFlag.js
/*
 Feature Flag. Wzorzec ten jest używany do włączania i wyłączania funkcji 
 w aplikacji bez konieczności zmiany kodu. Dzięki temu można testować 
 nowe funkcje na niewielkiej grupie użytkowników lub włączać/wyłączać 
 funkcje w zależności od różnych warunków.
 */
// featureFlag.js

export default class FeatureFlag {
    constructor() {
        this.flags = new Map();
    }

    enableFeature(featureName) {
        this.flags.set(featureName, true);
    }

    disableFeature(featureName) {
        this.flags.set(featureName, false);
    }

    isFeatureEnabled(featureName) {
        return this.flags.get(featureName) || false;
    }
}