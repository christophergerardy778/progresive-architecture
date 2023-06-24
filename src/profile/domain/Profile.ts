import { Column, Entity, PrimaryColumn } from 'typeorm';
import { ProfilePhoto } from './value-object/ProfilePhoto';
import { ProfileUsername } from './value-object/ProfileUsername';
import { ProfileId } from './value-object/ProfileId';
import { ProfileLastConnection } from './value-object/ProfileLastConnection';
import { UserEmail } from '../../user/domain/value-object/UserEmail';

@Entity()
export class Profile {
  @PrimaryColumn({
    type: 'text',
    transformer: {
      from: (value: string) => new ProfileId(value),
      to: (profileId: ProfileId) => profileId.value,
    },
  })
  readonly id!: ProfileId;

  @Column({
    type: 'text',
    transformer: {
      from: (value: string) => new ProfilePhoto(value),
      to: ({ value }: ProfilePhoto) => value,
    },
  })
  readonly photo!: ProfilePhoto;

  @Column({
    unique: true,
    type: 'text',
    transformer: {
      from: (value: string) => new ProfileUsername(value),
      to: ({ value }: ProfileUsername) => value,
    },
  })
  readonly username!: ProfileUsername;

  @Column({
    type: 'timestamp with time zone',
    transformer: {
      from: (value: string) => new ProfileLastConnection(new Date(value)),
      to: ({ value }: ProfileLastConnection) => value,
    },
  })
  readonly lastConnection!: ProfileLastConnection;

  constructor(params?: {
    id: ProfileId,
    photo: ProfilePhoto,
    username: ProfileUsername,
    lastConnection: ProfileLastConnection,
  }) {
    if (params) {
      this.id = params.id;
      this.photo = params.photo;
      this.username = params.username;
      this.lastConnection = params.lastConnection;
    }
  }

  public static create(params: {
    id: ProfileId,
    photo: ProfilePhoto,
    lastConnection: ProfileLastConnection,
    username: ProfileUsername,
  }) {
    return new Profile(params);
  }

  public static default(userEmail: UserEmail) {
    return new Profile({
      id: ProfileId.random(),
      photo: ProfilePhoto.empty(),
      lastConnection: ProfileLastConnection.now(),
      username: ProfileUsername.createUsernameDefault(userEmail),
    });
  }
}
