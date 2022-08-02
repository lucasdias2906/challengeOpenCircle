import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class createDrivers1659387433647 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "drivers",
                columns: [
                    {
                        name: "idDriver",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "name_driver",
                        type: "varchar",
                    },
                    {
                        name: "id_shipping",
                        type: "uuid",
                    },
                ],
                    foreignKeys: [
                        {
                            name: "fk_drivers_shipping",
                            columnNames: ["id_shipping"],
                            referencedTableName: "shipping",
                            referencedColumnNames: ["idShipping"]
                        }
                    ]
            })
        )
    
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Drivers")
    }

}
