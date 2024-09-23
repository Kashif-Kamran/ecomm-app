import { Request, Response, Router } from "express";
import MongoProductRepository from "../database/mongodb/repositories/product.repo.mongo";
import GetProductByIdUseCase from "../application/usecases/get-product-by-id.usecase";

const router = Router();

router.get('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const getProductByIdUC = new GetProductByIdUseCase(new MongoProductRepository());
    const product = await getProductByIdUC.execute({ id });
    if (!product) return res.status(404).send({ success: false, message: "Product Not Found" });
    return res.status(200).send({
        success: true, message: "Product found successfully", data: product
    })
})

export default router;
