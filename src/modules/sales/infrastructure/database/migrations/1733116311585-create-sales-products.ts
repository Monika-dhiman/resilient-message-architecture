import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateSalesProduct1733116311585 implements MigrationInterface {
  name = 'CreateSalesProduct1733116311585';
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'sales_products',
        columns: [
          {
            name: 'product_id',
            type: 'uuid',
            isPrimary: true,
            isNullable: false,
            isUnique: true,
          },
          {
            name: 'price',
            type: 'decimal',
            isNullable: false,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('sales_products');
  }
}
