import {MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey} from "typeorm";

export class usersPermissoesPermissaes1642422086965 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(new Table({
            name:"users_permission_permissaes",
            columns:[
                {
                    name: "permissaeId",
                    type: "uuid",
                    isUnique: false
                },
                {
                    name: "userId",
                    type: "uuid",
                    isUnique: false
                }
            ]
        }))
     

        await queryRunner.createForeignKey("users_permission_permissaes",
        new TableForeignKey({
            name: "permissoesUserForeignKey",
            columnNames: ["permissaeId"],
            referencedColumnNames: ["id"],
            referencedTableName: "permissoes",
            onDelete: "SET NULL",
            onUpdate: "CASCADE"
        })
      )

      await queryRunner.createForeignKey("users_permission_permissaes",
      new TableForeignKey({
          name: "userPermissoesForeignKey",
          columnNames: ["userId"],
          referencedColumnNames: ["id"],
          referencedTableName: "users",
          onDelete: "SET NULL",
          onUpdate: "CASCADE"
      })
    )

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
     //   await queryRunner.dropTable("users_permission_permissaes")
        await queryRunner.dropForeignKey("users_permission_permissaes","permissoesUserForeignKey")
        await queryRunner.dropForeignKey("users_permission_permissaes","userPermissoesForeignKey")
    }

}
