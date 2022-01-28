import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class bairros1641567526857 implements MigrationInterface {
  
    public async up(queryRunner: QueryRunner): Promise<void> {

     
        await queryRunner.createForeignKey("bairros",
        new TableForeignKey({
            name: "distritosForeignKey",
            columnNames: ["distrito_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "distritos",
            onDelete: "SET NULL",
            onUpdate: "CASCADE"
         })
       )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
       // await queryRunner.dropForeignKey("bairros","distritosForeignKey")
    }
   
}
