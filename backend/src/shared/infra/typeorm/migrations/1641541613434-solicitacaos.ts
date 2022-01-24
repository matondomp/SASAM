import {MigrationInterface, QueryRunner, Table, TableColumn} from "typeorm";

export class solicitacaos1641541613434 implements MigrationInterface {

   
    public async up(queryRunner: QueryRunner): Promise<void> {
       
        await queryRunner.addColumn("solicitacaos",new TableColumn({
            type:"varchar",
            name:"sla",
            isNullable:true
        }))

        await queryRunner.addColumn("solicitacaos",new TableColumn({
            type:"varchar",
            name:"user_id",
            isNullable:true
        }))

   }
    
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("solicitacaos","sla")
        await queryRunner.dropColumn("solicitacaos","user_id")

    }

}
