import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class users1642343511677 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('users',new TableColumn({
             name: "telefone",
             type: "varchar",
             isUnique: false
        }))
     }
 
     public async down(queryRunner: QueryRunner): Promise<void> {
           await queryRunner.dropColumn('users','telefone')
     }

}
