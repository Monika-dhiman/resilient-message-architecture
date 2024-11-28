import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateBillingOrder1732778576570 implements MigrationInterface {
  name: 'CreateBillingOrder1732778576570';
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'billing_orders',
        columns: [
          {
            name: 'order_id',
            type: 'uuid',
            isPrimary: true,
            isNullable: false,
            isUnique: true,
          },
          {
            name: 'billing_acount_id',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'billing_address',
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
    await queryRunner.dropTable('billing_orders');
  }
}
