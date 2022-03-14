import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class priority1641558544930 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
           new Table({
                name:"priority",
                columns:[
                   {
                     name:"id",
                     type: "integer",
                     isPrimary:true,
                     isGenerated:true,
                     generationStrategy:'increment'
                   },
                   {
                    name:"description",
                    type:"varchar",
                    isUnique:false
                   },
                   {
                    name:"user_id",
                    type:"varchar",
                    isUnique:false
                   },
                   {
                    name:"estado_id",
                    type:"integer",
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
      
        await queryRunner.createForeignKey("priority",
        new TableForeignKey({
            name: "estateForeignKey",
            columnNames: ["estado_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "estados",
            onDelete: "SET NULL",
            onUpdate: "CASCADE"
         })
       )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // await queryRunner.dropTable("priority")
    }

}
