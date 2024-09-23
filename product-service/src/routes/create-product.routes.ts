import { Request, Response, Router } from "express";
import MongoProductRepository from "../database/mongodb/repositories/product.repo.mongo";
import CreateProductUseCase from "../application/usecases/create-product.usecase";
const router = Router();

router.post('/new', async (req: Request, res: Response) => {
    const { title, price, description, category, imageUrl } = req.body;
    const createProductUC = new CreateProductUseCase(new MongoProductRepository());
    const createdProduct = await createProductUC.execute({ title, price, description, category, imageUrl });
    return res.status(200).send({ success: true, message: "Products created successfully", data: createdProduct })
})

export default router;


