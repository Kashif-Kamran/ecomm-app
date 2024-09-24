import Order from "../domain/Order";
import OrderRepository from "../repositories/order.repository"

interface GetOrderByCustomerIdInputDTO {
    customerId: string
}

class GetOrderByCustomerIdUseCase {
    constructor(private readonly orderRepository: OrderRepository) { }

    async execute(getOrderDto: GetOrderByCustomerIdInputDTO): Promise<Order[]> {
        const orders: Order[] = await this.orderRepository.findByCustomerId(getOrderDto.customerId);
        return orders;
    }

}

export default GetOrderByCustomerIdUseCase;