import rateLimiter from 'express-rate-limit';

const creatRateLimiter = (maxRequest, time)=>{
    return rateLimiter({
        max:maxRequest,
        windowMs:time,
        message: "Too many requests sent. Please Wait..",
        standardHeaders: true,
        legacyHeaders: true
    })
}

export default creatRateLimiter