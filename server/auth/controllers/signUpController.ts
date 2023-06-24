import { Request, Response } from 'express';
import { container } from '../../../container';
import { SignUp } from '../../../src/auth/app/create/SignUp';
import { authTypes } from '../../../src/auth/infrastructure/di/AuthTypes';
import { User } from '../../../src/user/domain/User';
import { UserId } from '../../../src/user/domain/value-object/UserId';
import { Profile } from '../../../src/profile/domain/Profile';
import { UserLastname } from '../../../src/user/domain/value-object/UserLastname';
import { UserName } from '../../../src/user/domain/value-object/UserName';
import { UserEmail } from '../../../src/user/domain/value-object/UserEmail';
import { UserPassword } from '../../../src/user/domain/value-object/UserPassword';
import { errorHandler } from '../../shared/errorHandler';

const signUp = container.get<SignUp>(authTypes.signUp);

export async function signUpController(req: Request, res: Response) {
  try {
    const userEmail = new UserEmail(req.body.email);

    const user = User.create({
      id: UserId.random(),
      lastname: new UserLastname(req.body.lastname),
      name: new UserName(req.body.name),
      email: userEmail,
      profile: Profile.default(userEmail),
      password: new UserPassword(req.body.password),
    });

    await signUp.run(user);

    res.status(200).json(user);
  } catch (e: any) {
    errorHandler(e, res);
  }
}
