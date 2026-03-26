class APIErrorHandler extends Error {
    constructor(message, statusCode) {
        super(message);

        this.statusCode = statusCode;
        // Automatically set status based on the code (400s = fail, 500s = error)
        this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
        
        // Mark as 'operational' so we know it's a handled business logic error
        this.isOperational = true;

        // Clean up the stack trace
        Error.captureStackTrace(this, this.constructor);
    }

    // Helpful method to format the error for the frontend
    serializeError() {
        return {
            status: this.status,
            message: this.message,
            code: this.statusCode,
            // Only show stack trace if we are in development mode
            stack: process.env.NODE_ENV === 'development' ? this.stack : undefined
        };
    }
}

export default APIErrorHandler