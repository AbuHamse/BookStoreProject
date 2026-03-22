import connectToDB from '../db/db.js'
import Author from '../models/Author.js'
i


const seedDB = async()=>{
    try {
        await mongoose.connect()
    } catch (error) {
        
    }

}