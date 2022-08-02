import { ShippingEnum } from "../enum/shippingEnum";

export default interface IShippingDTO {
    idShipping: any
    name_shipping: string;
    value: string;
    status: ShippingEnum;
    data: Date;
}