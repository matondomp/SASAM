import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class users1642341253592 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
       await queryRunner.addColumn('users',new TableColumn({
            name: "estado_id",
            type: "varchar",
            default: "1",
            isUnique: false
       }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
          await queryRunner.dropColumn('users','estado_id')
    }

}
