import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateBillingAccount1732778594499 implements MigrationInterface {
  name: 'CreateBillingAccount1732778594499';
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'billing_accounts',
        columns: [
          {
            name: 'billing_account_id',
            type: 'uuid',
            isPrimary: true,
            isNullable: false,
            isUnique: true,
          },
          {
            name: 'card_number',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'balance',
            type: 'decimal',
            isNullable: false,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('billing_accounts');
  }
}
