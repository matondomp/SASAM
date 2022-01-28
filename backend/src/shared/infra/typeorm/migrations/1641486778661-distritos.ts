import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export class distritos1641485040035 implements MigrationInterface {
 

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKey("distritos",
        new TableForeignKey({
            name: "municipioForeignKey",
            columnNames: ["municipio_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "municipios",
            onDelete: "SET NULL",
            onUpdate: "CASCADE"
        })
    )
    await queryRunner.createForeignKey("distritos",
        new TableForeignKey({
            name: "provinceForeignKey",
            columnNames: ["provincia_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "provinces",
            onDelete: "SET NULL",
            onUpdate: "CASCADE"
        })
    )
     /*    await queryRunner.createForeignKey("distritos",
            new TableForeignKey({
                name: "estateForeignKey",
                columnNames: ["estado_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "estados",
                onDelete: "SET NULL",
                onUpdate: "CASCADE"
            })
        ) */
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      /*   await queryRunner.dropForeignKey("distritos","estateForeignKey")
        await queryRunner.dropForeignKey("distritos","provinceForeignKey") */
    }

}
