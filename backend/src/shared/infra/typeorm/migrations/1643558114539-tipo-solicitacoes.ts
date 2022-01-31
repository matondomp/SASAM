import { 
     MigrationInterface,
     QueryRunner, 
     Table
 } from "typeorm";

export class tipoSolicitacoes1643558114539 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "tipo_solicitacoes",
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
                        name: "estado_id",
                        type: "int",
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
         await queryRunner.dropTable("tipo_solicitacoes")
    }

}
