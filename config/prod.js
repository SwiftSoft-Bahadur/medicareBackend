module.exports = {
    jwtSecret: process.env.jwtSecret,
    mongoURL: process.env.mongoURL ,
    redisHOST: process.env.redisHOST,
    redisPORT: process.env.redisPORT,
    redisPassword: process.env.redisPassword,
    port: process.env.PORT || 3000
};
// mongodb+srv://Bahadur:5621@cluster0.hjvag.mongodb.net/