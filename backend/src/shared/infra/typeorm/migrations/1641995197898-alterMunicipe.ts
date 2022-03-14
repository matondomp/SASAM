import { MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey } from "typeorm";

export class alterMunicipe1641995197898 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.changeColumn("municipes", new TableColumn({
            name: "tipo_municipe_id",
            type: "integer",
            isNullable: true,
            isUnique: false
        }),
            new TableColumn({
                name: "tipo_municipe_id",
                type: "integer",
                isNullable:true,
                isUnique: false
            })

        )
        await queryRunner.createForeignKey("municipes",
            new TableForeignKey({
                name: "typeMunicipeForeignKey",
                columnNames: ["tipo_municipe_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "tipo-municipios",
                onDelete: "SET NULL",
                onUpdate: "CASCADE"
            })
        )

        await queryRunner.changeColumn("municipes", new TableColumn({
            name: "estado_cil_id",
            type: "integer",
            isNullable: true,
            isUnique: false
        }),
            new TableColumn({
                name: "estado_cil_id",
                type: "integer",
                isNullable:true,
                isUnique: false
            })

        )
        await queryRunner.createForeignKey("municipes",
            new TableForeignKey({
                name: "estadoCivilForeignKey",
                columnNames: ["estado_cil_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "estado-civil",
                onDelete: "SET NULL",
                onUpdate: "CASCADE"
            })
        )
/* 
        await queryRunner.changeColumn("municipes", new TableColumn({
            name: "bairro_id",
            type: "varchar",
            isNullable: true,
            isUnique: false
        }),
            new TableColumn({
                name: "bairro_id",
                type: "integer",
                isNullable:true,
                isUnique: false
            })

        ) */
        await queryRunner.createForeignKey("municipes",
            new TableForeignKey({
                name: "bairroMunicipeForeignKey",
                columnNames: ["bairro_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "bairros",
                onDelete: "SET NULL",
                onUpdate: "CASCADE"
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("municipes","typeMunicipeForeignKey")
        await queryRunner.dropForeignKey("municipes","estadoCivilForeignKey")
        await queryRunner.dropForeignKey("municipes","bairroMunicipeForeignKey")
    }

}
