
import { Router } from 'express';

import ShippingController from '../controllers/Shipping';

const shippingRouter = Router();

const shippingController = new ShippingController()


shippingRouter.post('/shipping', shippingController.create)
shippingRouter.get('/shipping', shippingController.findAll)


export default shippingRouter
