export class CreateOrderDto {
  product_ids: ProductIdDto[];
  customer_id: string;
}

class ProductIdDto {
  id: string;
  quantity: number;
}
