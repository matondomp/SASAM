import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export class bairros1641568060772 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropForeignKey("bairros","distritoForeignKey")
       
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
   
    }

}
