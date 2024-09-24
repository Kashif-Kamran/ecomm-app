import mongoose from "mongoose";
import { Schema, Model } from "mongoose";
import Order from "../../../application/domain/Order";

export interface OrderDocument extends Order, Document { }

const OrderSchema: Schema<OrderDocument> = new Schema<OrderDocument>({
    id: { type: String },
    customerId: { type: String },
    createdAt: { type: Date },
    status: { type: String },
    totalAmount: { type: Number },
    products: [{
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
    }],
});

const OrderModel: Model<OrderDocument> = mongoose.model<OrderDocument>("Order", OrderSchema);

export default OrderModel