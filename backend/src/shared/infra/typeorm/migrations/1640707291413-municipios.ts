import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class municipios1640707291413 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "municipios",
                columns: [
                    {
                        name: "id",
                        type: "integer",
                        isPrimary:true,
                        isGenerated:true,
                        generationStrategy:'increment'
                    },
                    {
                        name: "name",
                        type: "varchar",
                        isUnique: false
                    },
                    {
                        name: "provincia_id",
                        type: "int",
                        isUnique: false
                    },
                    {
                        name: "estado_id",
                        type: "int",
                     //   default: "uuid_generate_v4()",
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
        await queryRunner.dropTable("municipios")
    }

}
