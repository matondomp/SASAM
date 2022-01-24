import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class identidades1642002742186 implements MigrationInterface {


    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "identidades",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                        generationStrategy: "uuid",
                        default: "uuid_generate_v4()"
                    },
                    {
                        name: "municipe_id",
                        isNullable:true,
                        type: "uuid",
                        isUnique: false
                    },
                    {
                        name: "name",
                        type: "varchar",
                        isUnique: false
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

        await queryRunner.createForeignKey("identidades",
        new TableForeignKey({
            name: "identidadeMunicipeForeignKey",
            columnNames: ["municipe_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "municipes",
            onDelete: "SET NULL",
            onUpdate: "CASCADE"
        })
    )

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("identidades")
        await queryRunner.dropForeignKey("identidades","identidadeMunicipeForeignKey")
    }
}
