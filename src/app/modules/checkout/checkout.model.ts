
// all the imports here
import { Schema } from 'mongoose';

// Checkout schema for creating model in database
const checkoutSchema = new Schema({
    userName: {
        type: String,
        trim: true,
        required: [true, 'User name is required.']
    },
    userEmail: {
        type: String,
        trim: true,
        required: [true, 'User email is required.'],
        unique: true,
        validate: {
            validator: function (email) {
                // Simple email validation regex
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
            },
            message: 'Invalid email address.'
        }
    },
    
    productId: {
        type: String,
        trim: true,
        required: [true, 'Product ID is required.']
    },
    productQuantity: {
        type: Number,
        required: [true, 'Product quantity is required.'],
        min: [1, 'Minimum one product is required.'],
        validate: [
            {
                validator: Number.isInteger,
                message: 'Product quantity must be an integer.'
            },
            {
                validator: function (value: number) {
                    return value > 0;
                },
                message: 'product quantity must be a positive number.'
            }
        ]
    }
});

