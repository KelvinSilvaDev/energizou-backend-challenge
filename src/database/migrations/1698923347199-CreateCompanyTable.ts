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
                        generationStrategy: 'increment'
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
                        type: 'varchar',
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
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'phone',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'email',
                        type: 'varchar',
                        isNullable: false
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('company')
    }

}
