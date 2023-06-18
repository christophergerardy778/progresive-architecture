import {EnumValueObject} from '../value-object/EnumValueObject';
import {OrderTypes} from './OrderTypes';

export class OrderType extends EnumValueObject<OrderTypes> {
	constructor(value: OrderTypes) {
		super(value, Object.values(OrderTypes));
	}

	public isAsc() {
		return this.value === OrderTypes.ASC;
	}
}
