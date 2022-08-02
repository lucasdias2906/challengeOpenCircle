import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class createShipping1659109498529 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "shipping",
                columns: [
                    {
                        name: "idShipping",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "name_shipping",
                        type: "varchar",
                    },
                    {
                        name: "value",
                        type: "varchar",
                    },
                    {
                        name: "status",
                        type: "varchar",
                    },
                    {
                        name: "data",
                        type: "timestamp",
                        default: "now()"
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
