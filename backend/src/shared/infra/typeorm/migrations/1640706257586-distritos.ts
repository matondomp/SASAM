import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class distritos1640706257586 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "distritos",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                        generationStrategy: "uuid",
                        default: "uuid_generate_v4()"
                    },
                    {
                        name: "name",
                        type: "varchar",
                        isUnique: false
                    },
                    {
                        name: "municipio_id",
                        type: "uuid",
                        isUnique: false,
                        default: "uuid_generate_v4()"
                    },
                    {
                        name: "provincia_id",
                        type: "uuid",
                        isUnique: false,
                        default: "uuid_generate_v4()"
                    },
                    {
                        name: "estado_id",
                        type: "uuid",
                        isUnique: false,
                        default: "uuid_generate_v4()"
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
        await queryRunner.dropTable("distritos")
    }

}
