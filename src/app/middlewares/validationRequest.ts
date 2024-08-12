
// all the imports here
import { NextFunction, Request, Response } from "express"; // import tyep from express
import catchAsync from "../utils/catchAsync"; // import catchAsync from utils
import { AnyZodObject } from "zod";

// validate function for every zod object 
const validateRequest = (schema: AnyZodObject) => {
    return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        await schema.parseAsync({
            body: req.body,
            cookies: req.cookies,
        });
    });
};

// export the validate request function as default
export default validateRequest;