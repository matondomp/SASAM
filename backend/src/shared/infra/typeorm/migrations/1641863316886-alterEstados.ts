import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class alterEstados1641863316886 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.addColumn("estados",new TableColumn({
                name: "estado_id",
                type: "int",
                default: "1",
                isUnique: false
        }))
       
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("estados","estado_id")
    }

}
