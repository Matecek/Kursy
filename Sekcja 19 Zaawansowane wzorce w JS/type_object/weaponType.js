/* 
Wzorzec Type Object Pattern polega na reprezentowaniu typów obiektów jako obiekty. 
Zamiast tworzyć wiele klas dla różnych typów obiektów, tworzymy jedną klasę, która 
może reprezentować różne typy poprzez kompozycję. Wzorzec ten jest szczególnie 
przydatny w systemach, gdzie liczba typów obiektów jest dynamiczna lub bardzo duża 
i trudna do zarządzania przy użyciu tradycyjnych klas. Dzięki temu wzorcowi możemy 
łatwo dodawać nowe typy obiektów bez konieczności modyfikowania istniejącego kodu 
lub tworzenia nowych klas. 
*/

export class WeaponType {
    constructor(name, damage) {
        this.name = name;
        this.damage = damage;
    }

    describe() {
        return `Weapon type: ${this.name}, Damage: ${this.damage}`;
    }
}