import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm";

export class identidades1643148914806 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropColumn('identidades','name')

        await queryRunner.addColumn('identidades', new TableColumn({
            name: "numero_identificacao",
            type: "varchar",
            isUnique: false,
            isNullable:true
        }))

        await queryRunner.addColumn('identidades', new TableColumn({
            name: "userId",
            type: "uuid",
            isUnique: false,
            isNullable:true
        }))

        await queryRunner.addColumn('identidades', new TableColumn({
            name: "data_emissao",
            type: "timestamp",
            isUnique: false,
            isNullable:true
        }))

        await queryRunner.addColumn('identidades', new TableColumn({
            name: "data_validade",
            type: "timestamp",
            isUnique: false,
            isNullable:true
        }))

        await queryRunner.createForeignKey("identidades",
            new TableForeignKey({
                name: "userIdentidadeForeignKey",
                columnNames: ["userId"],
                referencedColumnNames: ["id"],
                referencedTableName: "users",
                onDelete: "SET NULL",
                onUpdate: "CASCADE"
            })
      )

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('identidades',new TableColumn(
            {
                name: "name",
                type: "varchar",
                isUnique: false,
                isNullable:true
            },
        ) )
        await queryRunner.dropColumn('identidades','numero_identificacao')
        await queryRunner.dropColumn('identidades','userId')
        await queryRunner.dropColumn('identidades','data_emissao')
        await queryRunner.dropColumn('identidades','data_validade')

    }

}
