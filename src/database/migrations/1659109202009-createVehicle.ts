import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class createVehicle1659109202009 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(
            new Table({
                name: "vehicle",
                columns: [
                    {
                        name: "idVehicle",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "name_vehicle",
                        type: "varchar",
                    },
                    {
                        name: "id_driver",
                        type: "uuid",
                    },
                    {
                        name: "id_typeVehicle",
                        type: "uuid",
                    },
                ],
                foreignKeys: [
                    {
                        name: "fk_vehicle_driver",
                        columnNames: ["id_driver"],
                        referencedTableName: "drivers",
                        referencedColumnNames: ["idDriver"]
                    },
                    {
                        name: "fk_vehicle_typeVehicle",
                        columnNames: ["id_typeVehicle"],
                        referencedTableName: "typeVehicle",
                        referencedColumnNames: ["idTypeVehicle"]
                    }
                ],
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Vehicle")
    }

}
