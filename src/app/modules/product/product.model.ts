
// all the imports here
import { Schema } from "mongoose";
import { TProduct, TTag } from "./product.interface";

// tag schema for product
const tagSchema = new Schema<TTag>({
    tag: {
        type: String,
        trim: true,
        required: [true, 'product tag is required.'],
    }
})

// product schema for creating model in data base
const productschema = new Schema<TProduct>({
    name: {
        type: String,
        trim: true,
        required: [true, 'product name is required.'],
    },
    tags: {
        type: [tagSchema],
        trim: true,
        validate: {
            validator: function (tagsArray) {
                return tagsArray.length > 0;
            },
            message: 'At least one tag is required.'
        }
    },
    description: {
        type: String,
        trim: true,
        required: [true, 'product description is required.'],
    },
    price: {
        type: Number,
        required: [true, 'product price is required.'],
        min: [0, 'product price must be positive number']
    },
    
    quantity: {
        type: Number,
        required: true,
        min: [0, 'Quantity can\'t be negative'],
        validate: {
            validator: Number.isInteger,
            message: 'Quantity must be an integer'
        }
    },
    rating: {
        type: Number,
        default: 10
    },
    isAvailable: {
        type: Boolean,
        default: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true,
})

