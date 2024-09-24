import { CreateNewOrderDTO } from "../dtos/order.dtos";
import Order from "../domain/Order";
import Product from "../domain/Product";
import OrderRepository from "../repositories/order.repository";
import ProductServiceInteractor from "../services/product-service.interactor";
class CreateNewOrderUseCase {

    constructor(private readonly orderRepository: OrderRepository, private readonly productServiceInteractor: ProductServiceInteractor) { }

    async execute(createOrderDto: CreateNewOrderDTO) {
        const products: Product[] = await this.productServiceInteractor.getProductsListByIds(createOrderDto.productsIds);
        const order = new Order({
            id: String(Date.now()),
            customerId: createOrderDto.customerId,
            createdAt: new Date(),
            status: 'created',
            products: products,
            total: products.reduce((total, product) => total + product.price, 0)
        });
        await this.orderRepository.save(order);
        return order;
    }
}

export default CreateNewOrderUseCase;