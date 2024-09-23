import { Request, Response, Router } from "express";
import MongoProductRepository from "../database/mongodb/repositories/product.repo.mongo";
import GetProductsListUseCase from "../application/usecases/get-product-list.usecase";
const router = Router();

router.get('/all', async (req: Request, res: Response) => {

    const getProductListRoute = new GetProductsListUseCase(new MongoProductRepository());
    const products = await getProductListRoute.execute();
    return res.status(200).send({ success: true, message: "Products list fetched successfully", data: products })
})

export default router;
