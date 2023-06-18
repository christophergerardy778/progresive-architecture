import { Container } from 'inversify';
import { userContainer } from './src/user/infrastructure/di/UserContainer';
import { sharedContainer } from './src/shared/infrastructure/di/SharedContainer';
import { authContainer } from './src/auth/infrastructure/di/AuthContainer';
import { profileContainer } from './src/profile/infrastructure/di/ProfileContainer';

const container = new Container();

container.load(...[
  sharedContainer,
  userContainer,
  authContainer,
  profileContainer,
]);

export {
  container,
};
