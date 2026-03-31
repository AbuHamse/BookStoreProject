import 'dotenv/config'
import express from 'express'
import cors from 'cors'

import connectToDB from './db/db.js'

import bookRoutes from './routes/bookRoutes.js'
import authorRoutes from './routes/authorRoutes.js'
import userRoutes from './routes/userRoutes.js'
import authRoutes from './routes/authRoutes.js'

import configureCors from './config/corsConfig.js'

import globalErrorHandler from './middleware/globalErrorHandler.js'
import createRateLimiter from './middleware/rateLimiterHandler.js'
import requestLogger from './middleware/requestLogger.js'
import { primaryApiVersioningHandler } from './middleware/apiVersioningHandler.js'

const app = express()
const PORT = process.env.PORT || 3000


/*Connecting to DB */
connectToDB()

app.use(requestLogger)

app.use(configureCors())
app.use(createRateLimiter(100, 6000))


app.use(express.json({ limit: '10mb' }));


app.use(express.urlencoded({ limit: '10mb' ,extended: true }));

app.use(primaryApiVersioningHandler("v1"))


app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/books', bookRoutes)
app.use('/api/v1/authors', authorRoutes)
app.use('/api/v1/users', userRoutes)


app.use(globalErrorHandler)

app.listen(PORT,()=>{
    
    console.log(`Systems Running on PORT ${PORT}`)
})