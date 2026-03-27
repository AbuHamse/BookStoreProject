const requestLogger = (req,res,next) =>{

    const timeDate = new Date().toISOString();

    const method = req.method;
    const urlString = req.originalUrl;

    const userAgent = req.get('User-Agent') || 'Guest User'

    console.log(`${method} | ${timeDate} | ${urlString} --- ${userAgent}`)

    next()
}

export default requestLogger