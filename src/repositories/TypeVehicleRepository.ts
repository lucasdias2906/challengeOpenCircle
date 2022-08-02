import { AppDataSource } from "../config/data-source";

import ITypeVehicleRepository from "../IRepositories/ITypeVehicle";

import ITypeVehicleDTO from "../Dto/TypeVehicleDTO";

import { TypeVehicle } from "../database/entities/TypeVehicle";

class TypeVehicleRepository implements ITypeVehicleRepository {
  public async findById(id: any): Promise<TypeVehicle[]> {
    const typeVehicle = await AppDataSource.createQueryBuilder()
      .select("*")
      .from(TypeVehicle, "typeVehicle")
      .where(`"idTypeVehicle" = '${id}'`)
      .execute()

    return typeVehicle;
  }

  public async save(typeVehicle: TypeVehicle): Promise<TypeVehicle> {
    return AppDataSource.getRepository(TypeVehicle).save(typeVehicle);
  }

  public async create(typeVehicleData: ITypeVehicleDTO): Promise<TypeVehicle> {

    try {
      await AppDataSource.createQueryBuilder()
        .insert()
        .into(TypeVehicle)
        .values(typeVehicleData)
        .execute();

      const typeVehicle = await this.save(typeVehicleData);

      return typeVehicle;
    } catch (error) {
      return;
    }
  }
}

const typeVehicleRepository = new TypeVehicleRepository();
export default typeVehicleRepository;
