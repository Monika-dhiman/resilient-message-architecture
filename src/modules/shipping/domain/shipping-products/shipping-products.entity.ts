import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('shipping_products')
export class ShippingProduct {
    @PrimaryColumn({ type: 'uuid', unique: true, nullable: false })
    product_id: string;

    @Column({ type: 'int', nullable: false })
    quantity_on_hand: number;
}