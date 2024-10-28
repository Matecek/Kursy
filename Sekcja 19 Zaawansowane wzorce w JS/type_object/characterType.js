/*
characterType.js
*/

export class CharacterType {
    constructor(name, health, weaponType) {
        this.name = name;
        this.health = health;
        this.weaponType = weaponType;
    }

    describe() {
        return `Character type: ${this.name}, Health: ${this.health}, Weapon: ${this.weaponType.describe()}`;
    }
}