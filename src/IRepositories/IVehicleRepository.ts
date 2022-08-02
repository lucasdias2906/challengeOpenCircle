import { Vehicle } from "../database/entities/Vehicle";
import IVehicleDTO from '../Dto/VehicleDTO'

export default interface IVehicleRepository{
    findAll():Promise<Vehicle[] | undefined>;
    create(data: IVehicleDTO): Promise<Vehicle>;
    save(vehicle: Vehicle): Promise<Vehicle>;
}
