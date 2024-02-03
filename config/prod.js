module.exports = {
    jwtSecret: process.env.jwtSecret,
    mongoURL: process.env.MONGO_URL,
    redisHOST: process.env.redisHOST,
    redisPORT: process.env.redisPORT,
    redisPassword: process.env.redisPassword,
    port: process.env.PORT || 3000
};
