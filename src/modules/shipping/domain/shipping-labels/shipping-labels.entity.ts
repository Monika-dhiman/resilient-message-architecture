import { Entity, PrimaryColumn } from 'typeorm';

@Entity('shipping_labels')
export class ShippingLabel {
  @PrimaryColumn({ type: 'uuid', unique: true, nullable: false })
  order_id: string;
}
