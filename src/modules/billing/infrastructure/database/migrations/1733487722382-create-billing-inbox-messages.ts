import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateBillingInboxMessages1733487722382
  implements MigrationInterface
{
  name = 'CreateBillingInboxMessages1733487722382';
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'billing_inbox_messages',
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
    await queryRunner.dropTable('billing_inbox_messages');
  }
}
