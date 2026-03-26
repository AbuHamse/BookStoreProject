import cors from 'cors'
import APIErrorHandler from '../middleware/errorHandlerClass'

const configureCors = () =>{
    return cors({
        origin:(origin,callback) =>{
            const allowedOrigins = [
                "http://localhost:3000",
                "http://localhost:6000"
            ]

            if(!origin || allowedOrigins.indexOf(origin) !== -1 ){
                callback(null, true)
            }else{
                callback(new APIErrorHandler("Not Allowed by CORS", 403 ));
                
            }
        },
        methods:['GET','POST','PUT','DELETE'],
        allowedHeaders:["Content-Type","Authorization" ,"Accept-Version"],
        exposedHeaders:["Content-Range", "X-Total-Count"],
        maxAge:600,
        preflightContinue:false,
        optionsSuccessStatus:204,


        

        

    })
}

export default configureCors