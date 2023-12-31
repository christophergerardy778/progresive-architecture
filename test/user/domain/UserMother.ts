import { faker } from '@faker-js/faker';
import { User } from '../../../src/user/domain/User';
import { UserId } from '../../../src/user/domain/value-object/UserId';
import { UserPassword } from '../../../src/user/domain/value-object/UserPassword';
import { UserEmail } from '../../../src/user/domain/value-object/UserEmail';
import { UserLastname } from '../../../src/user/domain/value-object/UserLastname';
import { UserName } from '../../../src/user/domain/value-object/UserName';
import { ProfileMother } from '../../profile/domain/ProfileMother';
import { Profile } from '../../../src/profile/domain/Profile';

export class UserMother {
  public static random(): User {
    return User.create({
      id: UserId.random(),
      password: new UserPassword(faker.internet.password()),
      email: new UserEmail(faker.internet.email()),
      name: new UserName(faker.person.fullName()),
      lastname: new UserLastname(faker.person.lastName()),
      profile: ProfileMother.random(),
    });
  }

  public static create(params: {
    id: UserId,
    name: UserName,
    lastname: UserLastname,
    email: UserEmail,
    password: UserPassword,
    profile: Profile,
  }): User {
    return User.create(params);
  }

  public static withEmail(email: string): User {
    return User.create({
      id: UserId.random(),
      password: new UserPassword(faker.internet.password()),
      email: new UserEmail(email),
      name: new UserName(faker.person.fullName()),
      lastname: new UserLastname(faker.person.lastName()),
      profile: ProfileMother.random(),
    });
  }
}
