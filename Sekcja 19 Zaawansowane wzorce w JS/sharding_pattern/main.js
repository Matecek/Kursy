// main.js
import ShardManager from './shardManager.js';
import Shard from './shard.js';
import User from './user.js';

const shardManager = new ShardManager();
const shard1 = new Shard(1);
const shard2 = new Shard(2);
const shard3 = new Shard(3);
shardManager.addShard(shard1); 
shardManager.addShard(shard2); 
shardManager.addShard(shard3); 

for (let i = 1; i < 16; i++) {
    const user = new User(i, Math.random().toString());
    const shard = shardManager.getShardForKey(user.getId());
    shard.set(user.getId(), user.getName());
}

console.log("shard1 data: ", shard1);
console.log("\nshard2 data: ", shard2);
console.log("\nshard3 data: ", shard3);