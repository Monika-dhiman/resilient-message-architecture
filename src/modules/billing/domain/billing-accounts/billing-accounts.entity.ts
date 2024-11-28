import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('billing_accounts')
export class BillingOrder {
  @PrimaryColumn({ type: 'uuid', unique: true, nullable: false })
  billing_account_id: string;

  @Column({ type: 'varchar', nullable: false })
  card_number: string;

  @Column({ type: 'decimal', nullable: false })
  balance: number;
}
