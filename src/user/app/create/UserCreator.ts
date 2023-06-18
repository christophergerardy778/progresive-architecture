import { inject, injectable } from 'inversify';
import { User } from '../../domain/User';
import { AllUsers } from '../../domain/AllUsers';
import { userTypes } from '../../infrastructure/di/UserTypes';

@injectable()
export class UserCreator {
  constructor(@inject(userTypes.allUsers) private readonly allUser: AllUsers) {
  }

  public async run(user: User): Promise<void> {
    await this.allUser.save(user);
  }
}
