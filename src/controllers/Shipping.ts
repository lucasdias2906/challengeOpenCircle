import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import ShippingRepository from "../repositories/ShippingRepository";
import TypeVehicleRepository from "../repositories/TypeVehicleRepository";

import { ShippingEnum } from "../enum/shippingEnum";

export default class ShippingController {
  public async create(req: Request, res: Response) {
    const distance = req.body.distance;

    const idTypeVehicle = req.body.idTypeVehicle;

    const findTypeVehicle = await TypeVehicleRepository.findById(idTypeVehicle);

    const calculeShipping = distance + parseInt(findTypeVehicle[0].capacity);

    console.log(calculeShipping)

    const { name } = req.body;

    const createShip = {
      idShipping: uuidv4(),
      name_shipping: name,
      value: calculeShipping.toString(),
      status: ShippingEnum.PENDENT,
      data: new Date(),
    };

    const shipping = await ShippingRepository.create(createShip);

    if (shipping) {
      return res.json(shipping);
    } else {
      return res.send(400).json({ message: "Error, please check the data " });
    }
  }

  public async findAll(req: Request, res: Response) {
    const shipping = await ShippingRepository.findAll();

    if (shipping) {
      return res.json(shipping);
    } else {
      return res.send(400).json({ message: "No was possible show the data, please check code." });
    }
  }
}
