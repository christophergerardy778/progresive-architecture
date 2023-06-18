import {InvalidArgument} from '../InvalidArgument';

export abstract class EnumValueObject<T> {
	readonly value!: T;

	protected constructor(value: T, public readonly validValues: T[]) {
		this.value = value;
		this.checkIsValidValue(value);
	}

	protected checkIsValidValue(value: T) {
		if (!this.validValues.includes(value)) {
			throw new InvalidArgument();
		}
	}
}
