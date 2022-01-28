import {MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey} from "typeorm";

export class priorities1641565392991 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.addColumn("priority",new TableColumn(
            {
                name:"slug",
                type:"varchar",
                isNullable:true
               }
            
        ))
     
      
        }

    public async down(queryRunner: QueryRunner): Promise<void> {
         await queryRunner.dropTable("priority")
    }

}
