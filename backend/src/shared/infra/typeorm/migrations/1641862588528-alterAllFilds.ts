import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class alterAllFilds1641862588528 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {

    

        await queryRunner.changeColumn("distritos",new TableColumn({
            name: "estado_id",
            type: "uuid",
            default: "uuid_generate_v4()",
             isUnique: false
        }),
            new TableColumn({
                name: "estado_id",
                type: "int",
                default: "1",
                isUnique: false
            })
        
        )

        await queryRunner.changeColumn("provinces",new TableColumn({
            name: "estado_id",
            type: "uuid",
            default: "uuid_generate_v4()",
             isUnique: false
        }),
            new TableColumn({
                name: "estado_id",
                type: "int",
                default: "1",
                isUnique: false
            })
        
        )

        await queryRunner.changeColumn("priority",new TableColumn({
            name: "estado_id",
            type: "uuid",
            default: "uuid_generate_v4()",
             isUnique: false
        }),
            new TableColumn({
                name: "estado_id",
                type: "int",
                default: "1",
                isUnique: false
            })
        
        )

        await queryRunner.changeColumn("municipios",new TableColumn({
            name: "estado_id",
            type: "uuid",
            default: "uuid_generate_v4()",
             isUnique: false
        }),
            new TableColumn({
                name: "estado_id",
                type: "int",
                default: "1",
                isUnique: false
            })
        
        )

    /*     await queryRunner.createForeignKey("distritos",
        new TableForeignKey({
            name: "estateForeignKey",
            columnNames: ["estado_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "estados",
            onDelete: "SET NULL",
            onUpdate: "CASCADE"
        })
       )
       
         await queryRunner.createForeignKey("solicitacaos",
             new TableForeignKey({
                        name:"estateForeignKey",
                        columnNames:["estado_id"],
                        referencedColumnNames:["id"],
                        referencedTableName:"estados",
                        onDelete:"SET NULL",
                        onUpdate:"CASCADE"
                    })
                )  */
     
    }




    public async down(queryRunner: QueryRunner): Promise<void> {

/*          await queryRunner.createForeignKey("distritos",
        new TableForeignKey({
            name: "municipioForeignKey",
            columnNames: ["municipio_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "municipios",
            onDelete: "SET NULL",
            onUpdate: "CASCADE"
        })
    )
    await queryRunner.createForeignKey("distritos",
        new TableForeignKey({
            name: "provinceForeignKey",
            columnNames: ["provincia_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "provinces",
            onDelete: "SET NULL",
            onUpdate: "CASCADE"
        })
    )
   

   
  
            await queryRunner.createForeignKey("municipios",
            new TableForeignKey({
                name: "provinceForeignKey",
                columnNames: ["provincia_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "provinces",
                onDelete: "SET NULL",
                onUpdate: "CASCADE"
            })
        )
   
        await queryRunner.createForeignKey("bairros",
        new TableForeignKey({
            name: "municipioForeignKey",
            columnNames: ["municipio_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "municipios",
            onDelete: "SET NULL",
            onUpdate: "CASCADE"
        })
    )
    await queryRunner.createForeignKey("bairros",
        new TableForeignKey({
            name: "provinceForeignKey",
            columnNames: ["provincia_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "provinces",
            onDelete: "SET NULL",
            onUpdate: "CASCADE"
        })
    )  */
          

    }

}
