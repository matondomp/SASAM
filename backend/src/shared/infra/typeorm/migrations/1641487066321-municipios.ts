import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export class municipios1641487066321 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
     
        await queryRunner.createForeignKey("municipios",
            new TableForeignKey({
                name: "provinceForeignKey",
                columnNames: ["provincia_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "provinces",
                onDelete: "SET NULL",
                onUpdate: "CASCADE"
            })
        )
        await queryRunner.createForeignKey("municipios",
            new TableForeignKey({
                name: "estateForeignKey",
                columnNames: ["estado_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "estados",
                onDelete: "SET NULL",
                onUpdate: "CASCADE"
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
     /*    await queryRunner.dropForeignKey("municipios","estateForeignKey")
        await queryRunner.dropForeignKey("municipios","provinceForeignKey")
        await queryRunner.dropForeignKey("municipios","municipioForeignKey") */
    }


}
