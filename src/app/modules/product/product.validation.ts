
// all the imports here
import { z } from 'zod';

// validation schema for product
const productValidationSchema = z.object({
    name: z.string().trim(),
    tags: z.array(z.string().trim()).nonempty('At least one tag is required.'),
    description: z.string().trim(),
    price: z.number().positive("Price must be a positive number"),
    quantity: z.number().int("Quantity must be an integer").nonnegative('Quantity can\'t be negative.'),
    rating: z.number().default(10).optional(),
    isAvailble: z.boolean().default(true).optional(),
    isDeleted: z.boolean().default(false).optional(),
});


// validation schema for product update
const productUpdateValidationSchema = z.object({
    name: z.string().trim().optional(),
    tags: z.array(z.string().trim()).nonempty('At least one tag is required.').optional(),
    description: z.string().trim().optional(),
    price: z.number().positive("Price must be a positive number").optional(),
    quantity: z.number().int("Quantity must be an integer").nonnegative('Quantity can\'t be negative.').optional(),
    rating: z.number().default(10).optional(),
    isAvailble: z.boolean().default(true).optional(),
    isDeleted: z.boolean().default(false).optional(),
});



// all the product validation export here
export const productValidation = {
    productValidationSchema,
    productUpdateValidationSchema,
};
