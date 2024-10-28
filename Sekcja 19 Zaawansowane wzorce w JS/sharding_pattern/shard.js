// shard.js
/*
    Wzorzec sharding polega na podziale dużego zestawu danych na mniejsze, 
    bardziej zarządzalne fragmenty, które są następnie rozpraszane po wielu serwerach 
    lub bazach danych. Jest to technika używana do skalowania aplikacji, 
    które muszą obsługiwać bardzo duże ilości danych i żądań.
*/

class Shard {
    constructor(id) {
        this.id = id;
        this.data = {};
    }

    set(key, value) {
        this.data[key] = value;
    }

    get(key) {
        return this.data[key];
    }

    getAllData() {
        return this.data;
    }
}

export default Shard;
