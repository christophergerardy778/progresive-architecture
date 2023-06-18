import { faker } from '@faker-js/faker';
import { Profile } from '../../../src/profile/domain/Profile';
import { ProfilePhoto } from '../../../src/profile/domain/value-object/ProfilePhoto';
import { ProfileLastConnection } from '../../../src/profile/domain/value-object/ProfileLastConnection';
import { ProfileId } from '../../../src/profile/domain/value-object/ProfileId';
import { ProfileUsername } from '../../../src/profile/domain/value-object/ProfileUsername';
import { User } from '../../../src/user/domain/User';
import { UserEmail } from '../../../src/user/domain/value-object/UserEmail';

export class ProfileMother {
  public static random(): Profile {
    return Profile.create({
      username: ProfileUsername.createUsernameDefault(new UserEmail(faker.internet.email())),
      photo: new ProfilePhoto(faker.image.avatar()),
      lastConnection: ProfileLastConnection.now(),
      id: ProfileId.random(),
    });
  }

  public static withUser(user: User) {
    return Profile.create({
      username: ProfileUsername.createUsernameDefault(user.email),
      photo: new ProfilePhoto(faker.image.avatar()),
      lastConnection: ProfileLastConnection.now(),
      id: ProfileId.random(),
    });
  }
}
