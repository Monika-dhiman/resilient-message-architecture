import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { OrderStatus } from './enums/sales-order-status.enum';

@Entity('sales_orders')
export class SalesOrder {
  @PrimaryColumn({ type: 'uuid', unique: true, nullable: false })
  order_id: string;

  @Column({ type: 'jsonb', nullable: false })
  product_ids: { product_id: string; quantity: number }[];

  @Column({ type: 'uuid', nullable: false })
  customer_id: string;

  @Column({ type: 'enum', enum: OrderStatus, default: OrderStatus.PENDING })
  status: OrderStatus;

  @Column({ type: 'decimal', nullable: true })
  total_amount: number;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;
}
