/*
/spec/character.spec.js
*/

import { WeaponType } from '../weaponType.js';
import { CharacterType } from '../characterType.js';
import { Character } from '../character.js';

describe("Character", () => {
    let sword, knightType, knight;

    beforeEach(() => {
        sword = new WeaponType("Sword", 25);  
        knightType = new CharacterType("Knight", 100, sword);  
        knight = new Character(knightType); 
    });

    it("should describe character", () => {
        expect(knight.describe()).toEqual(`Character of type: Knight, Current Health: 100`);
    });

    it("should attack correctly archer", () => {
        const bow = new WeaponType("Bow", 15); 
        const archerType = new CharacterType("Archer", 75, bow); 
        const archer = new Character(archerType);
        
        knight.attack(archer);
        expect(archer.currentHealth).toEqual(50);
    });

    it("should attack correctly knight", () => {
        const bow = new WeaponType("Bow", 15); 
        const archerType = new CharacterType("Archer", 75, bow); 
        const archer = new Character(archerType);
        
        archer.attack(knight);
        expect(knight.currentHealth).toEqual(85);
    });
});