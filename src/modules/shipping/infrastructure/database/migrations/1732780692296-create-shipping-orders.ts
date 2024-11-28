import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateShippingOrder1732780692296 implements MigrationInterface {
  name = 'CreateShippingOrder1732780692296';
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'shipping_orders',
        columns: [
          {
            name: 'order_id',
            type: 'uuid',
            isPrimary: true,
            isNullable: false,
            isUnique: true,
          },
          {
            name: 'shipping_address',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('shipping_orders');
  }
}
