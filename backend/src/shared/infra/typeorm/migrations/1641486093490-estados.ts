import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class estados1641486093490 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
           new Table({
                name:"estados",
                columns:[
                   {
                     name:"id",
                     type: "integer",
                     isPrimary:true,
                     isGenerated:true,
                     generationStrategy:'increment'
                   },
                   {
                    name:"name",
                    type:"varchar",
                    isUnique:false
                   },
                   
                    {
                        name:"created_at",
                        type:"timestamp",
                        default:"now()"
                    },
                    {
                        name:"updated_at",
                        type:"timestamp",
                        default:"now()"
                    }
                   
                ]

            }) 
        )
      
        
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // await queryRunner.dropTable("estados")
    }

}
