import { DateValueObject } from '../../../shared/domain/value-object/DateValueObject';

export class ProfileLastConnection extends DateValueObject {
  public static now() {
    return new ProfileLastConnection(new Date());
  }
}
