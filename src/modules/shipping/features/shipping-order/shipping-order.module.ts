import { Module } from "@nestjs/common";
import { CreateShippingOrderModule } from "./create-shipping-orders/create-shipping-orders.module";

@Module({
    imports: [CreateShippingOrderModule],
})

export class ShippingOrderModule {}