import { Exception } from '../../shared/domain/Exception';

export class UserEmailAlreadyTaken extends Exception {
  public readonly CODE = 409;

  public static readonly MESSAGE = 'Email already in use';

  init(): void {
    this.setExceptionMetadata(this, UserEmailAlreadyTaken);
  }

  // eslint-disable-next-line class-methods-use-this
  public body() {
    return {
      message: UserEmailAlreadyTaken.MESSAGE,
    };
  }
}
