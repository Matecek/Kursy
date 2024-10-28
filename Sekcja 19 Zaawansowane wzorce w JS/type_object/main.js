/*
main.js
*/

import { WeaponType } from './weaponType.js';
import { CharacterType } from './characterType.js';
import { Character } from './character.js';

const sword = new WeaponType("Sword", 25);
const bow = new WeaponType("Bow", 15);

const knightType = new CharacterType("Knight", 100, sword);
const archerType = new CharacterType("Archer", 75, bow);

const knight = new Character(knightType);
const archer = new Character(archerType);

console.log(knight.describe());
console.log(archer.describe());

knight.attack(archer);
archer.attack(knight);

console.log(knight.describe());
console.log(archer.describe());
