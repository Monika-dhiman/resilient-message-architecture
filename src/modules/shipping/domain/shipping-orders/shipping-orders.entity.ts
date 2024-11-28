import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryColumn,
    UpdateDateColumn,
  } from 'typeorm';
  
  @Entity('shipping_orders')
  export class ShippingOrder {
    @PrimaryColumn({ type: 'uuid', unique: true, nullable: false })
    order_id: string;

    @Column({ type: 'varchar', nullable: false })
    shipping_address: string;
  
    @Column({ type: 'jsonb', nullable: false })
    product_ids: { product_id: string; quantity: number }[];

    @Column({ type: 'boolean', nullable: false, default: false })
    is_placed: boolean;

    @Column({ type: 'boolean', nullable: false, default: false })
    is_billed: boolean;
  
    @CreateDateColumn({ type: 'timestamp' })
    created_at: Date;
  
    @UpdateDateColumn({ type: 'timestamp' })
    updated_at: Date;
  }
  