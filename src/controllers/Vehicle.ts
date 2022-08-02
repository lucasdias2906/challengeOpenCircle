import { Request, Response } from "express";
import VehicleRepository from "../repositories/VehicleRepository";
import { v4 as uuidv4 } from "uuid";

export default class VehicleController {
  public async findAll(req: Request, res: Response) {
    const vehicle = await VehicleRepository.findAll();

    const newVehicle = vehicle.map((vehicle: any) => {
      const newObjVehicle = {
        name_Vehicle: vehicle.name_vehicle,
        idVehicle: vehicle.idVehicle,
        Driver: {
          idDriver: vehicle.idDriver,
          name_driver: vehicle.name_driver,
          idShipping: vehicle.idShipping

        },
        TypeVehicle: {
          idTypeVehicle: vehicle.idTypeVehicle,
          capacity: vehicle.capacity,
          height: vehicle.height,
          width: vehicle.width,
          lenght: vehicle.lenght,
          weight_total: vehicle.weight_total
        }
      }

      return newObjVehicle
    });

    if (vehicle) {
      return res.json(newVehicle);
    } else {
      return res.sendStatus(400).json({ message: "No was possible show the data, please check code." });
    }
  }

  public async create(req: Request, res: Response) {
    const { name, idDriver, idTypeVehicle } = req.body;

    const createVehicle = {
      idVehicle: uuidv4(),
      name_vehicle: name,
      id_driver: idDriver,
      id_typeVehicle: idTypeVehicle,
    };

    const vehicle = await VehicleRepository.create(createVehicle);

    if (vehicle) {
      return res.json(vehicle);
    } else {
      return res.sendStatus(400).json({ message: "Error, please check the data" });
    }
  }
}
