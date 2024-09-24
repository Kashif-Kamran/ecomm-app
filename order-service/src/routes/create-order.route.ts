import { Request, Router, Response } from "express";
import CreateNewOrderUseCase from "../application/usecases/create-new-order.usecase";
import MongoDbOrderRepositoy from '../databases/mongodb/repositories/order.repo.mongo'
import TestClientProductServiceInteractor from "../services/interactors/test-client.product-service";
const router = Router();

router.post('/new', async (req: Request, res: Response) => {
    const { customerId, productsIds } = req.body;
    const createOrderDto = {
        customerId: customerId,
        productsIds: productsIds
    }
    const createNewOrderUseCase = new CreateNewOrderUseCase(new MongoDbOrderRepositoy(), new TestClientProductServiceInteractor());
    const newOrder = await createNewOrderUseCase.execute(createOrderDto);
    res.status(200).send({ message: " Order created successfully", success: true, data: newOrder });
})

export default router;