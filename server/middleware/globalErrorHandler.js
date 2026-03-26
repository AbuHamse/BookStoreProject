

// const globalError = async(req,res,err,next)=>{
//     console.log(err.stack);

//         if(err instanceof APIErrorHandler){
//             return res.status(err.statusCode).json({
//                 success:false,
//                 message: err.message
//             })

//         }



// }



// middleware/errorMiddleware.js

const globalErrorHandler = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';

    if (process.env.NODE_ENV === 'development') {
        // In Dev: Give me all the info!
        res.status(err.statusCode).json({
            status: err.status,
            message: err.message,
            stack: err.stack,
            error: err
        });
    } else {
        // In Prod: Be careful what you show
        if (err.isOperational) {
            // This is an error we created (like 404 or 400)
            res.status(err.statusCode).json({
                status: err.status,
                message: err.message
            });
        } else {
            // This is a programming bug or crash (e.g. database down)
            // 1) Log it so the developer knows what happened
            console.error('ERROR 💥', err);

            // 2) Send generic message
            res.status(500).json({
                status: 'error',
                message: 'Something went very wrong!'
            });
        }
    }
};

export default globalErrorHandler;