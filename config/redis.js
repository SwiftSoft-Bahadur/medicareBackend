// const redis = require('redis');
// const config = require('../config/index');

// let client;

// function promisifyHget(client, key) {
//     return new Promise((resolve, reject) => {
//         client.hget(key, (err, result) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(result);
//             }
//         });
//     });
// }

// module.exports = {
//     getClient: () => {
//         if (!client) {
//             console.log("Reinitializing REDIS!!!!!!!!!!!!!!");
//             const redisConfig = {
//                 host: config.redisHOST,
//                 port: config.redisPORT
//             };

//             if (process.env.NODE_ENV === "production") {
//                 redisConfig.password = config.redisPassword;
//             }

//             client = redis.createClient(redisConfig);
//             console.log(client);
//             client.hgetAsync = (key) => promisifyHget(client, key);
//         }
//         return client;
//     }
// };


const util = require('util');
const redis = require('redis');
const config = require('../config/index');

let client;

module.exports = {
    getClient: () => {
        if (!client) {
            console.log("reinitializing REDIS!!!!!!!!!!!!!!");
            redisConfig = {
                host: config.redisHOST,
                port: config.redisPORT
            };
            if (process.env.NODE_ENV === "production") {
                redisConfig.password = config.redisPassword;
            }
            client = redis.createClient(redisConfig);
            client.hget = util.promisify(client.hget);
        }
        return client;
    }
};