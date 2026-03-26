import express from 'express'
import 'dotenv/config'
import connectToDB from './db/db.js'
import bookRoutes from './routes/bookRoutes.js'
import authorRoutes from './routes/authorRoutes.js'
import cors from 'cors'
import globalErrorHandler from './middleware/globalErrorHandler.js'
import configureCors from './config/corsConfig.js'
import createRateLimiter from './middleware/rateLimiterHandler.js'

const app = express()
const PORT = process.env.PORT || 3000

/*Connecting to DB */
connectToDB()

app.use(configureCors())
app.use(createRateLimiter(100, 6000))


app.use(express.json());


app.use(express.urlencoded({ extended: true }));

app.use('/api/books/', bookRoutes)
app.use('/api/authors/', authorRoutes)


app.use(globalErrorHandler)

app.listen(PORT,()=>{
    
    console.log(`Systems Running on PORT ${PORT}`)
})