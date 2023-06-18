import { FieldName } from './FieldName';
import { FilterOperator } from './FilterOperator';
import { Operator } from './Operator';

export class Filter {
  readonly fieldName!: FieldName;

  readonly operator!: FilterOperator;

  readonly value!: FieldName;

  constructor(params: {
    fieldName: FieldName,
    operator: FilterOperator,
    value: FieldName
  }) {
    this.fieldName = params.fieldName;
    this.operator = params.operator;
    this.value = params.value;
  }

  public static create(params: {
    fieldName: FieldName,
    operator: FilterOperator,
    value: FieldName
  }): Filter {
    return new Filter(params);
  }

  public static from(params: { fieldName: string, value: string, operator: Operator }) {
    return new Filter({
      fieldName: FieldName.create(params.fieldName),
      value: FieldName.create(params.value),
      operator: FilterOperator.from(params.operator),
    });
  }
}
