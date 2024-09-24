import { Request, Response, Router } from "express";
import GetOrderByCustomerIdUseCase from "../application/usecases/get-order-by-customerId.usecase";
import MongoOrderRepository from "../databases/mongodb/repositories/order.repo.mongo";
const router = Router();

router.get("/:customerId", async (req: Request, res: Response) => {
    const { customerId } = req.params;
    const getOrderByIdUC = new GetOrderByCustomerIdUseCase(new MongoOrderRepository());
    const retrivedOrder = await getOrderByIdUC.execute({ customerId });
    res.status(200).send({ message: "Order fetched successfully", success: true, data: retrivedOrder });
})
