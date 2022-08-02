
import { Router } from 'express';

import DriversController from '../controllers/Drivers';

const driversRouter = Router();

const driversController = new DriversController()


driversRouter.get('/drivers', driversController.findAll)
driversRouter.post('/drivers', driversController.create)



export default driversRouter
