import { query } from "express";
import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class bairros1641861561180 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropForeignKey("bairros","distritosForeignKey")
        await queryRunner.changeColumn("bairros",new TableColumn({
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
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      
    }
}
