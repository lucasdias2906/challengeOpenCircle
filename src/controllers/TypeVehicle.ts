import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import TypeVehicleRepository from "../repositories/TypeVehicleRepository";

export default class TypeVehicleController {
  public async create(req: Request, res: Response) {

    const { capacity, height, width, lenght,weight_total} = req.body;

    const createTypeVehicle = {
      idTypeVehicle: uuidv4(),
      capacity: capacity,
      height: height,
      width: width,
      lenght: lenght,
      weight_total: weight_total
    };

    const typeVehicle = await TypeVehicleRepository.create(createTypeVehicle);

    if (typeVehicle) {
      return res.json(typeVehicle);
    } else {
      return res.send(400).json({ message: "Please check the data " });
    }
  }

}
