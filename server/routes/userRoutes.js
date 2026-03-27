import express from 'express'
import registerController from '../controllers/userController'

const router = express.Router()

router.get('/', (res,req)=>{
    console.log(res.statusCode(200).send("New"))
})