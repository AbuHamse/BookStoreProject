import express from 'express'
import 'dotenv/config'
import connectToDB from './db/db.js'

const app = express()
const PORT = process.env.PORT || 3000

/*Connecting to DB */
connectToDB()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.listen(PORT,()=>{
    
    console.log(`Systems Running on PORT ${PORT}`)
})