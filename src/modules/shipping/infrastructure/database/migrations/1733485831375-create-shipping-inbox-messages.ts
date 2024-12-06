import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateShippingInboxMessages1733485831375 implements MigrationInterface {
  name = 'CreateShippingInboxMessages1733485831375';
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'shipping_inbox_messages',
        columns: [
          {
            name: 'id',
            type: 'serial',
            isPrimary: true,
          },
          {
            name: 'message_id',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'handler_name',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'handled_at',
            type: 'TIMESTAMP',
            default: 'now()',
            isNullable: false,
          },
          {
            name: 'updated_at',
            type: 'TIMESTAMP',
            default: 'now()',
            isNullable: false,
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('shipping_inbox_messages');
  }
}
