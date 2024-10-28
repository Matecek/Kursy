/*
character.js
*/

export class Character {
    constructor(characterType) {
        this.characterType = characterType;
        this.currentHealth = characterType.health;
    }

    attack(target) {
        target.takeDamadge(this.characterType.weaponType.damage);
    }

    takeDamadge(damage) {
        this.currentHealth -= damage;
        if (this.currentHealth <= 0) {
            console.log(`${this.characterType.name} has been defeated!`);
        }
    }

    describe() {
        return `Character of type: ${this.characterType.name}, Current Health: ${this.currentHealth}`;
    }
}