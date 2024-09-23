import { Router } from "express";
import createProductRoute from "./create-product.routes";
import getProductListRoute from "./get-product-list.route";
import getProductByIdRoute from "./get-product-by-id.route";
const router = Router();

router.use('/product', createProductRoute);
router.use('/product', getProductListRoute);
router.use('/product', getProductByIdRoute);

export default router;