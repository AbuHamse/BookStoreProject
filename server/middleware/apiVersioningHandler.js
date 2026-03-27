import APIErrorHandler from "./errorHandlerClass.js";

// Primary: URL Versioning (e.g., /api/v1/...)
export const primaryApiVersioningHandler = (version) => (req, res, next) => {
    // Note: It's 'startsWith' (plural 's')
    if (req.path.startsWith(`/api/${version}`)) {
        next();
    } else {
        // You MUST pass the error to next()
        return next(new APIErrorHandler(`Invalid API Version. Expected ${version}`, 400));
    }
};

// Secondary: Header Versioning (Accept-Version: v1)
export const secondaryApiVersionHandler = (version) => (req, res, next) => {
    // Check the 'Accept-Version' header
    if (req.get("Accept-Version") === version) {
        next();
    } else {
        return next(new APIErrorHandler(`API Version ${version} is required in headers`, 400));
    }
};