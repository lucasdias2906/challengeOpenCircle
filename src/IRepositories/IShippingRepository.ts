import { Shipping } from "../database/entities/Shipping";
import IShippingDTO from '../Dto/ShippingDTO'

export default interface IShippingRepository{
    findById(id: string): Promise<Shipping | undefined>;
    findAll():Promise<Shipping[] | undefined>;
    create(data: IShippingDTO): Promise<Shipping>;
    save(shipping: Shipping): Promise<Shipping>;
}
