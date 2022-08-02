import { TypeVehicle } from "../database/entities/TypeVehicle";
import ITypeVehicleDTO from '../Dto/TypeVehicleDTO'

export default interface ITypeVehicleRepository{
    findById(id: string): Promise<TypeVehicle[] | undefined>;
    create(data: ITypeVehicleDTO): Promise<TypeVehicle>;
    save(TypeVehicle: TypeVehicle): Promise<TypeVehicle>;
}
