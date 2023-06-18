import { StringVo } from '../../../shared/domain/value-object/StringVo';
import { UserEmail } from '../../../user/domain/value-object/UserEmail';

export class ProfileUsername extends StringVo {
  public static createUsernameDefault(userEmail: UserEmail): ProfileUsername {
    const emailUsername = ProfileUsername.getEmailUsername(userEmail);
    const randomNumber = ProfileUsername.generateRandomNumber();
    return new ProfileUsername(`${emailUsername.value}${randomNumber}`);
  }

  private static getEmailUsername(userEmail: UserEmail): ProfileUsername {
    const emailValue = userEmail.value;
    return new ProfileUsername(emailValue.substring(0, emailValue.indexOf('@')));
  }

  private static generateRandomNumber() {
    const minValue = 1;
    const maxValue = 1000;
    return Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);
  }
}
