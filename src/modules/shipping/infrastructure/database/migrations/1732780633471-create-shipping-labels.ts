import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateShippingLabel1732780633471 implements MigrationInterface {
  name: 'CreateShippingLabel1732780633471';
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'shipping_labels',
        columns: [
          {
            name: 'order_id',
            type: 'uuid',
            isPrimary: true,
            isNullable: false,
            isUnique: true,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('shipping_labels');
  }
}
