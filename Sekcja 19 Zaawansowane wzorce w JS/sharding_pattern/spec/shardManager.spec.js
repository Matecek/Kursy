// spec/shardManager.spec.js
import ShardManager from '../shardManager.js';
import Shard from '../shard.js';
import User from '../user.js';

describe("Sharding pattern", () => {
    let shardManager;

    beforeEach(() => {
        shardManager = new ShardManager();
        shardManager.addShard(new Shard(1));
        shardManager.addShard(new Shard(2));
    });

    it("should distribute data across shards", () => {
        const user1 = new User(1, "John");
        const user2 = new User(2, "Jane");

        const shard1 = shardManager.getShardForKey(user1.getId());
        shard1.set(user1.getId(), user1.getName());

        const shard2 = shardManager.getShardForKey(user2.getId());
        shard2.set(user2.getId(), user2.getName());

        expect(shard1.get(user1.getId())).toEqual("John");
        expect(shard2.get(user2.getId())).toEqual("Jane");
    });

    it("should get all shards", () => { 
        const shards = shardManager.getAllShards();
        expect(shards.length).toEqual(2); 
    });
});