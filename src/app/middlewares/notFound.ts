
// all the imports here
import { NextFunction, Request, Response } from "express";

// if not route found
const notFound = (req: Request, res: Response, next: NextFunction) => {
    return res.status(400).json({
        success: false,
        message: 'API NOT FOUND',
        error: '',
    });
};


// export notFound function as default
export default notFound;