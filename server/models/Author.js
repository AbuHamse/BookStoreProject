import mongoose from 'mongoose'
import { getRandomAge,getRandomCompany, randomGender } from '../utils/utils.js'

const companies = [
    'Tile Books Inc', 
    'MadeMan Books', 
    'Tropical Books', 
    'Galloway Books',
    'Maser Books',
    'Entitled Books',
    'Lively Books',
    'Scholastics Books',
    'Rose and Larry Books'

]




const AuthorSchema = mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        trim:true,
        minlength:4,
        maxlength:50
    },

    lastName:{
        type:String,
        required:true,
        trim:true,
        minlength:4,
        maxlength:50
    },
    age:{
        type:Number,
        min:0,
        max:1000,
        default:getRandomAge
    },
    jobType:{
        type:String,
        required:true,
        default:"Unemployed"
    },
    company:{
        type:String,
        required:true,
        default: () => getRandomCompany(companies)
    },
    bio:{
        type:String,
        default:"No Bio"
    },
    gender:{
        type:String,
        required:[true, "Please pick a gender"],
        default:randomGender
    },
    email:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:['user','admin'],
        default:"user"
    }

},{timestamp:true})

export default mongoose.model('Author',AuthorSchema)