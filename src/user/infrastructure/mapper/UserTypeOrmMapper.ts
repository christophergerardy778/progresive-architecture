import { User } from '../../domain/User';
import { UserId } from '../../domain/value-object/UserId';
import { UserPassword } from '../../domain/value-object/UserPassword';
import { UserEmail } from '../../domain/value-object/UserEmail';
import { UserName } from '../../domain/value-object/UserName';
import { UserLastname } from '../../domain/value-object/UserLastname';
import { Profile } from '../../../profile/domain/Profile';
import { ProfileId } from '../../../profile/domain/value-object/ProfileId';
import { ProfilePhoto } from '../../../profile/domain/value-object/ProfilePhoto';
import { ProfileUsername } from '../../../profile/domain/value-object/ProfileUsername';
import { ProfileLastConnection } from '../../../profile/domain/value-object/ProfileLastConnection';

export class UserTypeOrmMapper {
  public static map(params: any): User {
    return User.create({
      id: new UserId(params.user_id),
      password: new UserPassword(params.user_password),
      email: new UserEmail(params.user_email),
      name: new UserName(params.user_name),
      lastname: new UserLastname(params.user_lastname),
      profile: Profile.create({
        id: new ProfileId(params.profile_id),
        photo: new ProfilePhoto(params.profile_photo),
        username: new ProfileUsername(params.profile_username),
        lastConnection: new ProfileLastConnection(params.profile_lastConnection),
      }),
    });
  }
}
