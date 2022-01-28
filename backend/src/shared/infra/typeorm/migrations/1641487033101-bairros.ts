import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export class bairros1641487033101 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKey("bairros",
            new TableForeignKey({
                name: "municipioForeignKey",
                columnNames: ["municipio_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "municipios",
                onDelete: "SET NULL",
                onUpdate: "CASCADE"
            })
        )
        await queryRunner.createForeignKey("bairros",
            new TableForeignKey({
                name: "provinceForeignKey",
                columnNames: ["provincia_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "provinces",
                onDelete: "SET NULL",
                onUpdate: "CASCADE"
            })
        )
        await queryRunner.createForeignKey("bairros",
            new TableForeignKey({
                name: "estateForeignKey",
                columnNames: ["estado_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "estados",
                onDelete: "SET NULL",
                onUpdate: "CASCADE"
            })
        )
        await queryRunner.createForeignKey("bairros",
        new TableForeignKey({
            name: "distritoForeignKey",
            columnNames: ["distrito_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "bairros",
            onDelete: "SET NULL",
            onUpdate: "CASCADE"
        })
    )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
   /*      await queryRunner.dropForeignKey("bairros","estateForeignKey")
        await queryRunner.dropForeignKey("bairros","provinceForeignKey")
        await queryRunner.dropForeignKey("bairros","municipioForeignKey")
        await queryRunner.dropForeignKey("bairros","distritoForeignKey")
         */
    }


}
