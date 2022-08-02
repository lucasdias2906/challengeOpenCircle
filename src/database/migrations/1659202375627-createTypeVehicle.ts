import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class createTypeVehicle1659202375627 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(
            new Table({
                name: "typeVehicle",
                columns: [
                    {
                        name: "idTypeVehicle",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "capacity",
                        type: "varchar",
                    },
                    {
                        name: "height",
                        type: "varchar",
                    },
                    {
                        name: "width",
                        type: "varchar",
                    },
                    {
                        name: "lenght",
                        type: "varchar",
                    },
                    {
                        name: "weight_total",
                        type: "varchar",
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("TypeVehicle")
    }

}
