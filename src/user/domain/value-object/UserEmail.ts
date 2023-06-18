import { StringVo } from '../../../shared/domain/value-object/StringVo';
import { EmailValidator } from '../../../email/domain/EmailValidator';
import { EmailInvalid } from '../../../email/domain/EmailInvalid';

export class UserEmail extends StringVo {
  private emailValidator = new EmailValidator();

  constructor(email: string) {
    super(email);
    this.validateEmail(email);
  }

  private validateEmail(email: string) {
    if (!this.emailValidator.run(email)) {
      throw new EmailInvalid();
    }
  }
}
