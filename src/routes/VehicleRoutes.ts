
import { Router } from 'express';

import VehicleController from '../controllers/Vehicle';

const vehicleRouter = Router();

const vehicleController = new VehicleController()


vehicleRouter.get('/vehicle', vehicleController.findAll)
vehicleRouter.post('/vehicle', vehicleController.create)



export default vehicleRouter
