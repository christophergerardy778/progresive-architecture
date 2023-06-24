import { ContainerModule } from 'inversify';
import { SignUp } from '../../app/create/SignUp';
import { authTypes } from './AuthTypes';
import { CreateJwt } from '../../app/create/CreateJwt';

export const authContainer = new ContainerModule((bind) => {
  bind<SignUp>(authTypes.signUp).to(SignUp);
  bind<CreateJwt>(authTypes.createJwt).to(CreateJwt);
});
