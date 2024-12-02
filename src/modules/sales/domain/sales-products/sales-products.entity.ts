import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('sales_products')
export class SalesProduct {
    @PrimaryColumn({ type: 'uuid', nullable: false })
    product_id: string;

    @Column({ type: 'decimal', nullable: false })
    price: number;
}