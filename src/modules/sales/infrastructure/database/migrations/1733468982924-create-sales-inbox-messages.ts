import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateSalesInboxMessages1733468982924
  implements MigrationInterface
{
  name = 'CreateSalesInboxMessages1733468982924';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'sales_inbox_messages',
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
    await queryRunner.dropTable('sales_inbox_messages');
  }
}
