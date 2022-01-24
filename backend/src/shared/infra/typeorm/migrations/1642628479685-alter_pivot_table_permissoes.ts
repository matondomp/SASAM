import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class alterPivotTablePermissoes1642628479685 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("users_permissoes_permissaes",new TableColumn(
            {
                name: "id",
                type: "uuid",
                isPrimary: true,
                generationStrategy: "uuid",
                default: "uuid_generate_v4()"
            },
            
        ))
        await queryRunner.addColumn("users_permissoes_permissaes",new TableColumn(
            {
                name: "created_at",
                type: "timestamp",
                default: "now()"
            },
            
        ))
        await queryRunner.addColumn("users_permissoes_permissaes",new TableColumn(
            {
                name: "updated_at",
                type: "timestamp",
                default: "now()"
            }
            
        ))
    } 
   

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('users_permissoes_permissaes','id')
        await queryRunner.dropColumn('users_permissoes_permissaes','created_at')
        await queryRunner.dropColumn('users_permissoes_permissaes','updated_at')
    }

}
