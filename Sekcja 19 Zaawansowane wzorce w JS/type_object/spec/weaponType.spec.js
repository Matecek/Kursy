/*
/spec/weaponType.spec.js
*/

import { WeaponType } from "../weaponType.js";

describe("WeaponType", () => {
    let weaponType;

    beforeEach(() => {
        weaponType = new WeaponType("Sword", 25);
    });

    it("Should describe weapon correctly", () => {
        expect(weaponType.describe()).toEqual(`Weapon type: Sword, Damage: 25`);
    });
})