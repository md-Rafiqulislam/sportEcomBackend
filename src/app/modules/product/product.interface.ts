
// tag type for product
export type TTag = {
    tag: string;
}

// type of product
export type TProduct = {
    name: string;
    tags: TTag[];
    description: string;
    price: number;
    quantity: number;
    rating?: number;
    isAvailable?: boolean;
    isDeleted?: boolean;
};