import { Router } from 'express'
import shippingRoutes from '../routes/ShippingRoutes'
import driversRoutes from '../routes/DriversRoutes'
import vehicleRoutes from '../routes/VehicleRoutes'

const routes = Router();

routes.use('/', shippingRoutes)
routes.use('/', driversRoutes)
routes.use('/', vehicleRoutes)



export default routes