
// all the imports here
import { z } from "zod";

// checkout validation schema
const checkoutValidationSchema = z.object({
    userName: z.string().trim(),
    userEmail: z.string().trim().email('Invalid email address.'),
    productId: z.string().trim(),
    productQuantity: z.number().min(1, 'minimum one product is required.').int('product quantity must be an integer.').positive('product quantity must be a positive number.'),
});

// export validation for checkout schema
export const checkoutValidation = {
    checkoutValidationSchema,
}