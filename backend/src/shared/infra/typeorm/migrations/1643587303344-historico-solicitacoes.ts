import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class historicoSolicitacoes1643587303344 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:"historico_solicitacoes",
            columns:[
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                    generationStrategy: "uuid",
                    default: "uuid_generate_v4()"
                },
                {
                    name: "description",
                    type: "varchar",
                    isNullable:true,
                    isUnique: false
                },
                {
                    name: "motivo",
                    type: "varchar",
                    isNullable:true,
                    isUnique: false
                },
                {
                    name: "user_id",
                    type: "uuid",
                    isNullable:true,
                    isUnique: false
                },
                {
                    name: "solicitacao_id",
                    type: "uuid",
                    isNullable:true,
                    isUnique: false
                },
                {
                    name: "estado_id",
                    type: "uuid",
                    isNullable:false,
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
        }))

        await queryRunner.createForeignKey("historico_solicitacoes",
        new TableForeignKey({
            name: "historicoSolicitacoesSolicitacoesForeignKey",
            columnNames: ["solicitacao_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "solicitacaos",
            onDelete: "SET NULL",
            onUpdate: "CASCADE"
        })
      )
        await queryRunner.createForeignKey("historico_solicitacoes",
        new TableForeignKey({
            name: "historicoSolicitacoesUserForeignKey",
            columnNames: ["user_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "users",
            onDelete: "SET NULL",
            onUpdate: "CASCADE"
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("historico_solicitacoes")
    }

}
