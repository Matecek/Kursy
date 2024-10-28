// shardManager.js
/*
    Wzorzec sharding polega na podziale dużego zestawu danych na mniejsze, 
    bardziej zarządzalne fragmenty, które są następnie rozpraszane po wielu serwerach 
    lub bazach danych. Jest to technika używana do skalowania aplikacji, 
    które muszą obsługiwać bardzo duże ilości danych i żądań.
*/

class ShardManager {
    constructor() {
        this.shards = [];
    }

    addShard(shard) {
        this.shards.push(shard);
    }

    getShardForKey(key) {
        // 1 % 3 = 1
        // 2 % 3 = 2
        // 3 % 3 = 0
        // 4 % 3 = 1
        // 5 % 3 = 2
        // 6 % 3 = 0
        const shardId = key % this.shards.length;
        return this.shards[shardId];
    }

    getAllShards() {
        return this.shards;
    }
}

export default ShardManager;

