import { AppDataSource } from "../config/data-source";

import IShippingRepository from "../IRepositories/IShippingRepository";

import IShippingDTO from "../Dto/ShippingDTO";

import { Shipping } from "../database/entities/Shipping";

class ShippingRepository implements IShippingRepository {
  public async findById(id: any): Promise<Shipping> {
    const shipping = await AppDataSource.getRepository(Shipping).findOne(id);

    return shipping;
  }

  public async findAll(): Promise<Shipping[]> {

    try {

      const shipping = await AppDataSource.createQueryBuilder()
      .select('*')
      .from(Shipping, 'shipping')
      .orderBy('shipping.data', 'DESC')
      .orderBy('shipping.status', 'DESC')
      .execute()

      return shipping;

    } catch (error) {
      
      return
    }

  }

  public async save(shipping: Shipping): Promise<Shipping> {
    return AppDataSource.getRepository(Shipping).save(shipping);
  }

  public async create(shippingData: IShippingDTO): Promise<Shipping> {

    
    try {
      await AppDataSource
      .createQueryBuilder()
      .insert().into(Shipping)
      .values(shippingData)
      .execute()
      .then((shippingData) => { console.log(" Ok dados", shippingData)}).catch((error)=>{console.log(error)})

      const saveShip = await this.save(shippingData)

      return saveShip


    } catch (error) {
      console.log("error", error)
      return 
      
    }

  }
}

const shippingRepository = new ShippingRepository();
export default shippingRepository;
