import { Entity, Column, PrimaryColumn} from 'typeorm'

@Entity("typeVehicle")
export class TypeVehicle {

    @PrimaryColumn()
    idTypeVehicle: string;

    @Column()
    capacity: string;

    @Column()
    height: string;

    @Column()
    width: string

    @Column()
    lenght: string

    @Column()
    weight_total: string
}