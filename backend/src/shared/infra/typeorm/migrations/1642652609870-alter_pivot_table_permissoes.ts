import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class alterPivotTablePermissoes1642652609870 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("users_permissoes_permissaes",new TableColumn(
            {
                name: "key",
                type: "int",
                isNullable:true
            },
            
        ))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('users_permissoes_permissaes','key')
    }

}
