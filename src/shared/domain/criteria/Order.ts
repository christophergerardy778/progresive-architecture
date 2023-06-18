import {OrderBy} from './OrderBy';
import {OrderTypes} from './OrderTypes';
import {OrderType} from './OrderType';

export class Order {
	readonly orderBy!: OrderBy;
	readonly orderType!: OrderType;

	constructor(orderBy: OrderBy, orderType: OrderType) {
		this.orderBy = orderBy;
		this.orderType = orderType;
	}

	public static asc(orderBy: string) {
		return new Order(new OrderBy(orderBy), new OrderType(OrderTypes.ASC));
	}
}
