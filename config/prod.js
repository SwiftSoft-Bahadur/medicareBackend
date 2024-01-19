module.exports = {
    jwtSecret: process.env.jwtSecret,
    mongoURL: process.env.mongoURL || "mongodb://localhost/medicare",
    redisHOST: process.env.redisHOST,
    redisPORT: process.env.redisPORT,
    redisPassword: process.env.redisPassword,
    port: process.env.PORT || 3000
};