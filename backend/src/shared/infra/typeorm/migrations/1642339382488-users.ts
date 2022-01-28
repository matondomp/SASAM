import {
    MigrationInterface,
    QueryRunner, 
    Table, 
    TableForeignKey
} from "typeorm";

export class users1642337751807 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                        generationStrategy: "uuid",
                        default: "uuid_generate_v4()"
                    },
                    {
                        name: "name",
                        type: "varchar",
                        isUnique: false
                    },
                    {
                        name: "username",
                        type: "varchar",
                        isUnique: true,
                        isNullable:false
                    },
                    {
                        name: "password",
                        type: "varchar",
                        isUnique: false,
                        isNullable:false
                    },
                    {
                        name: "email",
                        type: "varchar",
                        isUnique: true,
                        isNullable:true
                    },
                    {
                        name: "perfil_id",
                        type: "uuid",
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

            })
        )

   
     }

    public async down(queryRunner: QueryRunner): Promise<void> {
       // await queryRunner.dropTable("users")
     
    }

}
