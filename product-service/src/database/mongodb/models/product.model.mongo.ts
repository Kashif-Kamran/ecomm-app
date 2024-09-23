import Product from "../../../application/domain/Product";
import mongoose, { Model, Schema } from "mongoose";
export interface ProductDocument extends Product, Document { }


const ProductSchema: Schema<ProductDocument> = new Schema({
    id: { type: String },
    title: { type: String },
    price: { type: Number },
    description: { type: String },
    category: { type: String },
    imageUrl: { type: String },
    rating: {
        rate: { type: Number },
        count: { type: Number }
    },
    createdAt: { type: Date }
});

const ProductModel: Model<ProductDocument> = mongoose.model<ProductDocument>("Product", ProductSchema);

export default ProductModel;