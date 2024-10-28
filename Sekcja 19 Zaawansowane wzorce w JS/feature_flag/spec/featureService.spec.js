// spec/featureService.spec.js
import FeatureService from '../featureService.js';
import User from '../user.js';

describe("Feature flag pattern", () => {
    let featureService, admin, regularUser, guest;

    beforeEach(() => {
        featureService = new FeatureService();
        admin = new User(1, "Alice", "admin");
        regularUser = new User(2, "Bob", "regular");
        guest = new User(3, "Charlie", "guest");
    });

    it("should enable feature to admin users", () => {
        featureService.enableFeatureForUserType("darkTheme", "admin");
        expect(featureService.isFeatureEnabledForUser("darkTheme", admin)).toBe(true);
    });

    it("should not enable feature to regular users", () => {
        featureService.enableFeatureForUserType("darkTheme", "regular");
        expect(featureService.isFeatureEnabledForUser("darkTheme", regularUser)).toBe(false);
    });

    it("should not enable feature to guest users", () => {
        featureService.enableFeatureForUserType("darkTheme", "guest");
        expect(featureService.isFeatureEnabledForUser("darkTheme", guest)).toBe(false);
    });

    it("should disable feature", () => {
        featureService.enableFeatureForUserType("darkTheme", "admin");
        featureService.featureFlag.disableFeature("darkTheme");
        expect(featureService.isFeatureEnabledForUser("darkTheme", admin)).toBe(false);
    });

    it("should enable and then disable feature for admin", () => {
        featureService.enableFeatureForUserType("newFeature", "admin");
        expect(featureService.isFeatureEnabledForUser("newFeature", admin)).toBe(true);

        featureService.featureFlag.disableFeature("newFeature");
        expect(featureService.isFeatureEnabledForUser("newFeature", admin)).toBe(false);
    });

    it("should not affect other features when one is toggled", () => {
        featureService.enableFeatureForUserType("featureA", "admin");
        featureService.enableFeatureForUserType("featureB", "admin");
        featureService.featureFlag.disableFeature("featureA");
        expect(featureService.isFeatureEnabledForUser("featureA", admin)).toBe(false);
        expect(featureService.isFeatureEnabledForUser("featureB", admin)).toBe(true);
    });
});

