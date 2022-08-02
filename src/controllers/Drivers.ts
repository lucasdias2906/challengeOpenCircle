import { Request, Response } from "express";
import DriversRepository from "../repositories/DriversRepository";
import { v4 as uuidv4 } from "uuid";

export default class DriversController {

  public async findAll(req: Request, res: Response) {
    const drivers = await DriversRepository.findAll()

    const newDriver = drivers.map((drivers: any)=>{

      const newObjDrivers = {
        idDriver: drivers.idDriver,
        name_driver: drivers.name_driver,
        Shipping: {
          idShipping: drivers.id_shipping,
          name_shipping: drivers.name_shipping,
          value: drivers.value,
          status: drivers.status,
          data: drivers.data
        }
      }

      return newObjDrivers
    })

    if (newDriver) {
      return res.json(newDriver);
    } else {
      return res.sendStatus(400).json({ message: "At the moment it was not possible to show the data, please check the code " });
    }
  }

  public async create(req: Request, res: Response) {
    
    const { name, id_shipping } = req.body;

    const createDriver = {
      idDriver: uuidv4(),
      name_driver: name,
      id_shipping: id_shipping,
    };

    const drivers = await DriversRepository.create(createDriver);

    if (drivers) {
      return res.json(drivers);
    } else {
      return res.sendStatus(400).json({ message: "Not was possible register of data, please check code or informations" });
    }
  }

  
}
