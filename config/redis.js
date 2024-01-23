const redis = require('redis');
const config = require('../config/index');

let client;

function promisifyHget(client, key) {
    return new Promise((resolve, reject) => {
        client.hget(key, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
}

module.exports = {
    getClient: () => {
        if (!client) {
            console.log("Reinitializing REDIS!!!!!!!!!!!!!!");
            const redisConfig = {
                host: config.redisHOST,
                port: config.redisPORT
            };

            if (process.env.NODE_ENV === "production") {
                redisConfig.password = config.redisPassword;
            }

            client = redis.createClient(redisConfig);

            // Check if hget method exists before manually promisifying
            if (client.hget) {
                client.hgetAsync = (key) => promisifyHget(client, key);
            }

            // Handle MaxListenersExceededWarning by increasing the limit
            client.setMaxListeners(15); // Set an appropriate number based on your application

            // Add error event listener to log Redis connection errors
            client.on('error', (err) => {
                console.error('Redis connection error:', err);
            });
        }
        return client;
    }
};
