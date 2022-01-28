import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class users1643355049658 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.changeColumn('users',new TableColumn(
            {
                name: "perfil_id",
                type: "uuid",
                isUnique: false
            }
           ),
           new TableColumn(
            {
                name: "perfil_id",
                type: "uuid",
                isUnique: false,
                isNullable:true
            },
           )
     )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

    }
}
