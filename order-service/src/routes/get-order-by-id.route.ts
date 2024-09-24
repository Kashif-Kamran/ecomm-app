import { Request, Router, Response } from 'express'
import GetOrderByIdUseCase from '../application/usecases/get-order-by-id.usecase';
import MongoOrderRepository from '../databases/mongodb/repositories/order.repo.mongo';
import Order from '../application/domain/Order';
const router = Router()

router.get("/:id", async (req: Request, res: Response) => {
    const { id } = req.params;
    const getOrderByIdUC = new GetOrderByIdUseCase(new MongoOrderRepository());
    const retrivedOrder: Order | null = await getOrderByIdUC.execute({ orderId: id });
    if (retrivedOrder) return res.status(200).send({ message: "Order fetched successfully", success: true, data: retrivedOrder })
    res.status(404).send({ message: "Order not found", success: true, data: retrivedOrder })
    // create usecase
})

export default router;