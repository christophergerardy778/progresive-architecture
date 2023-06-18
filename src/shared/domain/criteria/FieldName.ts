import { StringVo } from '../value-object/StringVo';

export class FieldName extends StringVo {
  constructor(value: string) {
    super(value);
  }

  public static create(value: string): FieldName {
    return new FieldName(value);
  }
}
