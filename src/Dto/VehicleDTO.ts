import { Drivers } from "../database/entities/Drivers";
import { TypeVehicle } from "../database/entities/TypeVehicle";

export default interface IVehicleDTO {
  idVehicle: string;
  name_vehicle: string;
  id_driver: string;
  drivers?: Drivers;
  typeVehicle?: TypeVehicle;
  id_typeVehicle?: string;
}
