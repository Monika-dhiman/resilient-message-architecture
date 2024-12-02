export class CreateOrderDto {
  order_id: string;
  product_ids: ProductIdDto[];
  customer_id: string;
}

class ProductIdDto {
  id: string;
  quantity: number;
}
