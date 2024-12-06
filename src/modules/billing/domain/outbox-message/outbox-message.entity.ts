import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { BillingOutBoxStatus } from './enums/status.enum';

@Entity('billing_outbox_message')
export class BillingOutboxMessage {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'uuid', unique: true })
  message_id: string;

  @Column({ type: 'varchar', length: 255 })
  type: string;

  @Column({ type: 'json' })
  headers: any;

  @Column({ type: 'json' })
  properties: any;

  @Column({ type: 'json' })
  body: any;

  @Column({
    type: 'enum',
    enum: BillingOutBoxStatus,
    default: BillingOutBoxStatus.PENDING,
  })
  status: BillingOutBoxStatus;

  @Column({ type: 'timestamp', nullable: true })
  sent_at: Date;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;

  public markAsSent(): void {
    if (this.status === BillingOutBoxStatus.SENT) {
      throw new Error('Message is already marked as sent.');
    }

    this.status = BillingOutBoxStatus.SENT;
    this.sent_at = new Date();
  }
}
