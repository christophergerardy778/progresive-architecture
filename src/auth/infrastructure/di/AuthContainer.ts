import { ContainerModule } from 'inversify';
import { SignUp } from '../../app/create/SignUp';
import { authTypes } from './AuthTypes';

export const authContainer = new ContainerModule((bind) => {
  bind < SignUp >(authTypes.signUp).to(SignUp);
});
