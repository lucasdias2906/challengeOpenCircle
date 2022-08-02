import { AppDataSource } from "../config/data-source";

import IVehicleRepository from "../IRepositories/IVehicleRepository";

import IVehicleDTO from "../Dto/VehicleDTO";

import { Vehicle } from "../database/entities/Vehicle";

class VehicleRepository implements IVehicleRepository {

  public async findAll(): Promise<[]> {
    try {
      const shipping = await AppDataSource
      .query('select * from vehicle inner join drivers on drivers."idDriver" = "id_driver" inner join "typeVehicle" on "typeVehicle"."idTypeVehicle" = "id_typeVehicle" ')

      return shipping;
    } catch (error) {
      return;
    }
  }

  public async save(vehicle: IVehicleDTO): Promise<Vehicle> {

    return AppDataSource.getRepository(Vehicle).save(vehicle);
  }

  public async create(vehicleData: IVehicleDTO): Promise<Vehicle> {
    try {
      await AppDataSource.createQueryBuilder()
        .insert()
        .into(Vehicle)
        .values(vehicleData)
        .execute()
        .then((vehicleData) => {
          console.log(" Ok dados", vehicleData);
        })
        .catch((error) => {
          console.log(error);
        });

      const saveShip = await this.save(vehicleData);

      return saveShip;
    } catch (error) {
      return;
    }
  }
}

const vehicleRepository = new VehicleRepository();
export default vehicleRepository;
