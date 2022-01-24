import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class permissaes1642353022902 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "permissoes",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                        generationStrategy: "uuid",
                        default: "uuid_generate_v4()"
                    },
                    {
                        name: "nome",
                        type: "varchar",
                        isUnique: false
                    },
                    {
                        name: "description",
                        type: "varchar",
                        isNullable:true
                    },
                    {
                        name: "flag",
                        type: "varchar",
                        isNullable:true
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
        await queryRunner.dropTable("permissoes")
    }

}
