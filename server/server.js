import express from 'express'
import 'dotenv/config'
import connectToDB from './db/db.js'
import bookRoutes from './routes/bookRoutes.js'

const app = express()
const PORT = process.env.PORT || 3000

/*Connecting to DB */
connectToDB()

// ✅ Parse JSON bodies
app.use(express.json());

// ✅ Optional: parse URL-encoded bodies (if needed)
app.use(express.urlencoded({ extended: true }));

app.use('/api/books/', bookRoutes)

app.listen(PORT,()=>{
    
    console.log(`Systems Running on PORT ${PORT}`)
})