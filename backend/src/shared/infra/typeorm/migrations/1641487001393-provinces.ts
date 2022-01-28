import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export class provinces1641487001393 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
     
        await queryRunner.createForeignKey("provinces",
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
        //await queryRunner.dropForeignKey("provinces","estateForeignKey")
    }


}
