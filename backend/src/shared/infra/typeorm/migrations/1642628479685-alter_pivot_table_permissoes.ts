import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class alterPivotTablePermissoes1642628479685 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("users_permission_permissaes",new TableColumn(
            {
                name: "id",
                type: "integer",
                isPrimary:true,
                isGenerated:true,
                generationStrategy:'increment'
            },
            
        ))
        await queryRunner.addColumn("users_permission_permissaes",new TableColumn(
            {
                name: "created_at",
                type: "timestamp",
                default: "now()"
            },
            
        ))
        await queryRunner.addColumn("users_permission_permissaes",new TableColumn(
            {
                name: "updated_at",
                type: "timestamp",
                default: "now()"
            }
            
        ))
    } 
   

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('users_permission_permissaes','id')
        await queryRunner.dropColumn('users_permission_permissaes','created_at')
        await queryRunner.dropColumn('users_permission_permissaes','updated_at')
    }

}
