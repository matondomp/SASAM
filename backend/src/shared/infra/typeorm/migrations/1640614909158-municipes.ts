import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

/* 



    @Column()
    telefone!:string 

    @Column()
    bairro_id!:string 

    @Column()
    user_id!:string 

    @Column()
    tipo_municipe!:string 

    @Column()
    genero_id!:string 

    @Column()
    estado_cil_id!:string 
    
    @CreateDateColumn()
    created_at!:Date

    @UpdateDateColumn()
    updated_at!:Date

*/

export class municipes1640614909158 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "municipes",
                columns: [
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
                        name: "email",
                        type: "varchar",
                        isUnique: true
                    },
                    {
                        name: "estado_id",
                        type: "integer",
                        default: 1,
                        isUnique: false
                    },
                    {
                        name: "pai",
                        type: "varchar",
                        isNullable: false,
                        isUnique: false

                    },

                    {
                        name: "mae",
                        type: "varchar",
                        isNullable: false,
                        isUnique: false

                    },
                    {
                        name: "residencia",
                        type: "varchar",
                        isNullable: false,
                        isUnique: false

                    },
                    {
                        name: "telefone",
                        type: "varchar",
                        isNullable: true,
                        isUnique: false

                    },
                    {
                        name: "bairro_id",
                        type: "integer",
                        isNullable: true,
                        isUnique: false

                    },
                    {
                        name: "user_id",
                        type: "integer",
                        isNullable: false,
                        isUnique: false

                    },
                    {
                        name: "tipo_municipe_id",
                        type: "integer",
                        isNullable: true,
                        isUnique: false

                    },
                    {
                        name: "genero_id",
                        type: "integer",
                        isNullable: true,
                        isUnique: false

                    },
                    {
                        name: "estado_cil_id",
                        type: "integer",
                        isNullable: true,
                        isUnique: false

                    },

                    {
                        name: "data_nascimento",
                        type: "timestamp with time zone",
                        default: "now()",
                        isNullable: false,
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
        await queryRunner.dropTable("municipes")
    }
}
