import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class users1642343511677 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('users',new TableColumn({
             name: "telefone",
             type: "varchar",
             isUnique: false
        }))

        await queryRunner.createForeignKey("users",
        new TableForeignKey({
            name: "userPerfilForeignKey",
            columnNames: ["perfil_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "perfils",
            onDelete: "SET NULL",
            onUpdate: "CASCADE"
         })
       )
     }
 
     public async down(queryRunner: QueryRunner): Promise<void> {
           await queryRunner.dropColumn('users','telefone')
           //await queryRunner.dropForeignKey("users","perfil_id")
     }

}
