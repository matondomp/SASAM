import {MigrationInterface, QueryRunner, Table, TableColumn} from "typeorm";

export class solicitacoes1643560551919 implements MigrationInterface {

  
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.changeColumn('solicitacaos',new TableColumn(
            {
                name: "description",
                type: "varchar",
                isUnique: false
            }
           ),
           new TableColumn(
            {
                name: "name",
                type: "varchar",
                isUnique: false,
                isNullable:true
            },
           )
        )
        
        await queryRunner.addColumn("solicitacaos",new TableColumn(
            {
                name: "tipo_solicitacao_id",
                type: "varchar",
                isUnique: false,
                isNullable:true
            }
            
        ))
        await queryRunner.addColumn("solicitacaos",new TableColumn(
            {
                name: "telefone",
                type: "varchar",
                isUnique: false,
                isNullable:true
            }
            
        ))
        await queryRunner.addColumn("solicitacaos",new TableColumn(
            {
                name: "numero_identificacao",
                type: "varchar",
                isUnique: false,
                isNullable:true
            }
            
        ))
   

   }

    
    public async down(queryRunner: QueryRunner): Promise<void> {
     //  await queryRunner.dropColumn('solicitacaos','tipo_solicitacao')
       await queryRunner.dropColumn('solicitacaos','telefone')
       await queryRunner.dropColumn('solicitacaos','numero_identificacao')
    }

}
