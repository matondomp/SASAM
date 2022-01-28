import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class provinces1640756452572 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
           new Table({
                name:"provinces",
                columns:[
                   {
                     name:"id",
                     type:"uuid",
                     isPrimary:true,
                     generationStrategy:"uuid",
                     default:"uuid_generate_v4()"
                   },
                   {
                    name:"name",
                    type:"varchar",
                    isUnique:false
                   },
                   
                   {
                      name:"estado_id",
                      type:"uuid",
                      default: "uuid_generate_v4()",
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
       //  await queryRunner.dropTable("provinces")
    }
}
