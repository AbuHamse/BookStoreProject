import mongoose from 'mongoose'

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

function getRandomCompany(){
            return companies[Math.floor(Math.random() * companies.length)]
        }

const AuthorSchema = mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        trim:true,
        minlength:4,
        maxlength:20
    },

    lastName:{
        type:String,
        required:true,
        trim:true,
        minlength:4,
        maxlength:20
    },
    age:{
        type:Number,
        min:15,
        max:1000
    },
    role:{
        type:String,
        enum:['user','admin'],
        default: 'user'
    },
    company:{
        type:String,
        required:true,
        default: getRandomCompany
    },
    bio:{
        type:String,
        default:"No Bio"
    },
    sex:{
        type:String,
        required:[true, "Please pick a gender"]
    }

},{timestamp:true})

export default mongoose.model('Author',AuthorSchema)