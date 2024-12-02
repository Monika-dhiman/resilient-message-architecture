import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateSalesOrder1732774585226 implements MigrationInterface {
  name: 'CreateSalesOrder1732774585226';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TYPE "public"."order_status_enum" AS ENUM('PENDING', 'PLACED', 'BILLED', 'PAYMENT_FAILED', 'READY_TO_SHIP', 'CANCELED');
          `);

    await queryRunner.createTable(
      new Table({
        name: 'sales_orders',
        columns: [
          {
            name: 'order_id',
            type: 'uuid',
            isPrimary: true,
            isNullable: false,
            isUnique: true,
          },
          {
            name: 'product_ids',
            type: 'jsonb',
            isNullable: false,
          },
          {
            name: 'customer_id',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'status',
            type: '"public"."order_status_enum"',
            default: `'PENDING'`,
            isNullable: false,
          },
          {
            name: 'total_amount',
            type: 'decimal',
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
    await queryRunner.dropTable('orders');
    await queryRunner.query(`DROP TYPE "public"."order_status_enum"`);
  }
}
