import Order from "../domain/Order";
import OrderRepository from "../repositories/order.repository";

interface GetOrderByIdInputDTO {
    orderId: string,
}


class GetOrderByIdUseCase {
    constructor(private readonly orderRepository: OrderRepository) { }

    async execute(getOrderDto: GetOrderByIdInputDTO): Promise<Order | null> {
        const order: Order | null = await this.orderRepository.findById(getOrderDto.orderId);
        return order;
    }
}

export default GetOrderByIdUseCase;