import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class perfils1642338435449 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "perfils",
                columns: [
                    {
                        name: "id",
                        type: "integer",
                        isPrimary:true,
                        isGenerated:true,
                        generationStrategy:'increment'
                    },
                    {
                        name: "nome",
                        type: "varchar",
                        isUnique: false,
                        isNullable:true
                    },
                    {
                        name: "estado_id",
                        type: "varchar",
                        default: "1",
                        isUnique: false
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    }

                ]

            })
        )
     }

    public async down(queryRunner: QueryRunner): Promise<void> {
        //await queryRunner.dropTable("perfils")
    }

}
