import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateShippingProduct1732780715747 implements MigrationInterface {
  name = 'CreateShippingProduct1732780715747';
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'shipping_products',
        columns: [
          {
            name: 'product_id',
            type: 'uuid',
            isPrimary: true,
            isNullable: false,
            isUnique: true,
          },
          {
            name: 'quantity_on_hand',
            type: 'integer',
            isNullable: false,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('shipping_products');
  }
}
