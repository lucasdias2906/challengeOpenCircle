import { AppDataSource } from "../config/data-source";

import IDriversRepository from "../IRepositories/IDriversRepository";

import IDriversDTO from "../Dto/DriversDTO";

import { Drivers } from "../database/entities/Drivers";

class DriversRepository implements IDriversRepository {

  public async findAll(): Promise<[]> {
    try {
      const shipping = await AppDataSource.query('select * from drivers inner join shipping on shipping."idShipping" = "id_shipping"')

      return shipping;
    } catch (error) {
      return;
    }
  }

  public async save(drivers: IDriversDTO): Promise<Drivers> {


    return AppDataSource.getRepository(Drivers).save(drivers);
  }

  public async create(driversData: IDriversDTO): Promise<Drivers> {
    try {
      await AppDataSource.createQueryBuilder()
        .insert()
        .into(Drivers)
        .values(driversData)
        .execute()
        .then((driversData) => {
          console.log(" Ok data", driversData);
        })
        .catch((error) => {
          console.log(error);
        });

      const saveShip = await this.save(driversData);

      return saveShip;
    } catch (error) {
      return;
    }
  }
}

const driversRepository = new DriversRepository();
export default driversRepository;
