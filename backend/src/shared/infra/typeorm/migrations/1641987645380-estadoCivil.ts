import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class estadoCivil1641987645380 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        
        await queryRunner.createTable(new Table({
            name:"estado-civil",
            columns:[
                {
                    name: "id",
                    type: "integer",
                    isPrimary:true,
                    isGenerated:true,
                    generationStrategy:'increment'
                },
                {
                    name: "name",
                    type: "varchar",
                    isUnique: false
                },
                {
                    name: "estado_id",
                    type: "int",
                    default: "1",
                    isUnique: false
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()"
                },
                {
                    name: "updated_at",
                    type: "timestamp",
                    default: "now()"
                }

            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("estado-civil")
    }

}
