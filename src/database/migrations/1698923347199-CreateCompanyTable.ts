import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateCompanyTable1698923347199 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'company',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        generationStrategy: 'increment',
                        isGenerated: true,
                    },
                    {
                        name: 'customerName',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'password',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'corporateName',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'cnpj',
                        type: 'bigint',
                        isNullable: false
                    },
                    {
                        name: 'cep',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'address',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'number',
                        type: 'int',
                        isNullable: false
                    },
                    {
                        name: 'phone',
                        type: 'bigint',
                        isNullable: false
                    },
                    {
                        name: 'email',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('company')
    }

}
