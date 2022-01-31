import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class solicitacoes1643562502525 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.changeColumn('solicitacaos',new TableColumn(
            {
                name: "tipo_solicitacao_id",
                type: "varchar",
                isUnique: false,
                isNullable:true
            }
           ),
           new TableColumn(
            {
                name: "tipo_solicitacao_id",
                type: "uuid",
                isUnique: false,
                isNullable:true
            },
           )
        )
        
        await queryRunner.createForeignKey("solicitacaos",
        new TableForeignKey({
            name: "solicitacaosTipoSolicitacoeForeignKey",
            columnNames: ["tipo_solicitacao_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "tipo_solicitacoes",
            onDelete: "SET NULL",
            onUpdate: "CASCADE"
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
