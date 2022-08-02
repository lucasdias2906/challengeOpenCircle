import { Entity, Column, PrimaryColumn } from "typeorm";
import { ShippingEnum } from "../../enum/shippingEnum";

@Entity("shipping")
export class Shipping {
  @PrimaryColumn()
  idShipping: string;

  @Column()
  name_shipping: string;

  @Column()
  value: string;

  @Column({
    type: "enum",
    enum: ShippingEnum,
    default: ShippingEnum.PENDENT,
  })
  status: ShippingEnum;

  @Column()
  data: Date;
}
