import { DateValueObject } from '../../../shared/domain/value-object/DateValueObject';

export class ProfileLastConnection extends DateValueObject {
  constructor(value: Date) {
    super(value);
  }

  public static now() {
    return new ProfileLastConnection(new Date());
  }
}
