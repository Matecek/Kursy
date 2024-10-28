/*
/spec/characterType.spec.js
*/

import { WeaponType } from '../weaponType.js';
import { CharacterType } from '../characterType.js';

describe("CharacterType", () => {
    let sword, characterType;
    
    beforeEach(() => {
        sword = new WeaponType("Sword", 25);
        characterType = new CharacterType("Knight", 100, sword);
    });

    it("should describe character type correctly", () => {
        expect(characterType.describe()).toEqual(`Character type: Knight, Health: 100, Weapon: Weapon type: Sword, Damage: 25`);
    })
});
