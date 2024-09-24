import Order from "../../../application/domain/Order";
import OrderModel, { OrderDocument } from "../models/order.model.mongo";
import OrderRepository from "../../../application/repositories/order.repository";
import Product from "../../../application/domain/Product";

const orderDocumentToEntityMapper = (orderDocument: OrderDocument): Order => {
    return new Order({
        id: orderDocument.id,
        customerId: orderDocument.customerId,
        createdAt: orderDocument.createdAt,
        status: orderDocument.status,
        products: orderDocument.products.map((product: any): Product => {
            return new Product({
                id: product.id,
                title: product.title,
                price: product.price,
                description: product.description,
                category: product.category,
                imageUrl: product.imageUrl,
                rating: product.rating,
                createdAt: product.createdAt,
            });
        }),
        total: orderDocument.totalAmount
    });
}

class MongoOrderRepository implements OrderRepository {

    async save(order: Order): Promise<void> {
        await OrderModel.create(order);
    }

    async findById(orderId: string): Promise<Order | null> {
        const order = await OrderModel.findOne({ id: orderId })
        if (order) return orderDocumentToEntityMapper(order);
        return null
    }

    async findByCustomerId(customerId: string): Promise<Order[]> {
        const orders = await OrderModel.find({ customerId });
        return orders.map(orderDocumentToEntityMapper);
    }
}


export default MongoOrderRepository;