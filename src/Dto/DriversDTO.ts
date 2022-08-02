import { Shipping } from "../database/entities/Shipping";

export default interface IDriversDTO {
  idDriver: string;
  name_driver: string;
  shipping?: Shipping;
}
