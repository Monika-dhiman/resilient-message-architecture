import { Event } from "src/domain/common/event";

export class SalesOrderPlacedEvent extends Event {
  type = 'sales.order_placed';

  getBody() {
    return {
        order_id: this.payload.order_id,
        customer_id: this.payload.customer_id,
        products_id: this.payload.product_ids,
        order_total: this.payload.total_amount,
    }
  }
}
