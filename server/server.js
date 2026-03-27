import 'dotenv/config'
import express from 'express'
import cors from 'cors'

import connectToDB from './db/db.js'

import bookRoutes from './routes/bookRoutes.js'
import authorRoutes from './routes/authorRoutes.js'
import userRoutes from './routes/userRoutes.js'

import configureCors from './config/corsConfig.js'

import globalErrorHandler from './middleware/globalErrorHandler.js'
import createRateLimiter from './middleware/rateLimiterHandler.js'
import requestLogger from './middleware/requestLogger.js'

const app = express()
const PORT = process.env.PORT || 3000


/*Connecting to DB */
connectToDB()

app.use(requestLogger)

app.use(configureCors())
app.use(createRateLimiter(100, 6000))


app.use(express.json());


app.use(express.urlencoded({ extended: true }));

app.use('/api/books/', bookRoutes)
app.use('/api/authors/', authorRoutes)
app.use('/api/user/', userRoutes)


app.use(globalErrorHandler)

app.listen(PORT,()=>{
    
    console.log(`Systems Running on PORT ${PORT}`)
})