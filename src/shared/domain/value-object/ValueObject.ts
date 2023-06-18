export type Primitives = String | string | number | Boolean | boolean | Date;

export abstract class ValueObject<T extends Primitives> {
	readonly value!: T;

	constructor(value: T) {
		this.value = value;
	}

	public equals(otherValue: ValueObject<T>) {
		return this.constructor.name === otherValue.constructor.name && this.value === otherValue.value;
	}
}
