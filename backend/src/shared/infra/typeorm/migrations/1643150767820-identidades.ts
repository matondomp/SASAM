import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class identidades1643150767820 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.addColumn('identidades', new TableColumn({
            name: "tipo_identificacao",
            type: "varchar",
            isUnique: false,
            isNullable:true
        }))

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        
        await queryRunner.dropColumn('identidades','tipo_identificacao')

    }

}
