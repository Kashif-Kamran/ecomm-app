import { Router } from "express";
import createNewOrderRouter from "./create-order.route"
import getOrderByIdRoute from "./get-order-by-id.route"
const router = Router();

router.use('/order', createNewOrderRouter);
router.use('/order', getOrderByIdRoute);

export default router;