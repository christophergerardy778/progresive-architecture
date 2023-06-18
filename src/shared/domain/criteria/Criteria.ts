import { Filter } from './Filter';
import { Order } from './Order';

export class Criteria {
  readonly filters!: Filter[];

  readonly order!: Order;

  constructor(params: { filters: Filter[], order: Order }) {
    this.filters = params.filters;
    this.order = params.order;
  }

  public static from(params: { filters: Filter[], order: Order }): Criteria {
    return new Criteria(params);
  }
}
