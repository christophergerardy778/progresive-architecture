import { Request, Response } from 'express';
import { container } from '../../../container';
import { SignUp } from '../../../src/auth/app/create/SignUp';
import { authTypes } from '../../../src/auth/infrastructure/di/AuthTypes';

const signUp = container.get<SignUp>(authTypes.signUp);

export function signUpController(req: Request, res: Response) {
  res.send('hola mundo');
}
