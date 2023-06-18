import { StringVo } from '../../../shared/domain/value-object/StringVo';

export class ProfilePhoto extends StringVo {
  public static empty() {
    return new ProfilePhoto('');
  }
}
