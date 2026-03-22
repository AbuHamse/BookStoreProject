import mongoose from 'mongoose'

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
    }
},{timestamp:true})

export default mongoose.model('Author',AuthorSchema)