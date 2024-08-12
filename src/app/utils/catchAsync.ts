
// all the imports here
import { NextFunction, Request, RequestHandler, Response } from "express"

// catch Async function every try catch operation
const catchAsync = (cbfn: RequestHandler) => {
    return (req: Request, res: Response, next: NextFunction) => {
        Promise.resolve(cbfn(req, res, next)).catch((error) => next(error));
    };
};

// export the catchAsync function
export default catchAsync;