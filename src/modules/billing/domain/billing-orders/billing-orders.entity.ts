import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('billing_orders')
export class BillingOrder {
  @PrimaryColumn({ type: 'uuid', unique: true, nullable: false })
  order_id: string;

  @Column({ type: 'uuid', nullable: false })
  billing_acount_id: string;

  @Column({ type: 'varchar', nullable: false })
  billing_address: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;
}
