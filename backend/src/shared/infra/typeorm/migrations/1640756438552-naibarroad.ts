import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class naibarroad1640756438552 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "bairros",
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
                        name: "distrito_id",
                        default: "uuid_generate_v4()",
                        type: "uuid",
                        isUnique: false
                    },
                    {
                        name: "municipio_id",
                        type: "uuid",
                        default: "uuid_generate_v4()",
                        isUnique: false
                    },
                    {
                        name: "provincia_id",
                        type: "uuid",
                        default: "uuid_generate_v4()",
                        isUnique: false
                    },
                    {
                        name: "estado_id",
                        type: "uuid",
                        default: "uuid_generate_v4()",
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
        //await queryRunner.dropTable("bairros")
    }

}
