import { EnumValueObject } from '../value-object/EnumValueObject';
import { Operator } from './Operator';

export class FilterOperator extends EnumValueObject<Operator> {
  constructor(value: Operator) {
    super(value, Object.values(Operator));
  }

  public static from(operator: Operator) {
    return new FilterOperator(operator);
  }
}
