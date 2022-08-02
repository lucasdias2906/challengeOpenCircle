import { Entity, Column, PrimaryColumn, OneToOne, JoinColumn } from "typeorm";

import { Drivers } from "../entities/Drivers";
import { TypeVehicle } from "../entities/TypeVehicle";

@Entity("vehicle")
export class Vehicle {
  @PrimaryColumn()
  idVehicle: string;

  @Column()
  name_vehicle: string;

  @Column()
  id_driver: string;

  @OneToOne(() => Drivers, (drivers) => drivers.idDriver)
  @JoinColumn()
  Drivers: Drivers;

  @Column()
  id_typeVehicle: string;

  @OneToOne(() => TypeVehicle, (typeVehicle) => typeVehicle.idTypeVehicle)
  @JoinColumn()
  TypeVehicle: TypeVehicle;
}
