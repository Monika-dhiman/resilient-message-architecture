import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('sales_products')
export class SalesProducts {
    @PrimaryColumn({ type: 'uuid', unique: true, nullable: false })
    product_id: string;

    @Column({ type: 'decimal', nullable: false })
    price: number;
}