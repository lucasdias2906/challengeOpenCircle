import { Entity, Column, PrimaryColumn, JoinColumn, OneToOne} from 'typeorm'
import {Shipping} from './Shipping'

@Entity("drivers")
export class Drivers {

    @PrimaryColumn()
    idDriver: string;

    @Column()
    name_driver: string;

    @Column()
    id_shipping: string

    @OneToOne(() => Shipping, (shipping) => shipping.idShipping)
    @JoinColumn()
    Shipping: Shipping;
    

}