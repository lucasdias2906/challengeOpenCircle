import { Drivers } from "../database/entities/Drivers";
import IDriversDTO from '../Dto/DriversDTO'

export default interface IDriversRepository{
    findAll():Promise<Drivers[] | undefined>;
    create(data: IDriversDTO): Promise<Drivers>;
    save(drivers: Drivers): Promise<Drivers>;
}
