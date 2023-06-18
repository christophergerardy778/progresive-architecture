import {
  Column, Entity, JoinColumn, OneToOne, PrimaryColumn,
} from 'typeorm';
import { UserId } from './value-object/UserId';
import { UserName } from './value-object/UserName';
import { UserLastname } from './value-object/UserLastname';
import { UserEmail } from './value-object/UserEmail';
import { UserPassword } from './value-object/UserPassword';
import { Profile } from '../../profile/domain/Profile';

@Entity()
export class User {
  @PrimaryColumn({
    type: 'text',
    transformer: {
      from: (value: string) => new UserId(value),
      to: (userId: UserId) => userId.value,
    },
  })
  readonly id!: UserId;

  @Column({
    type: 'text',
    nullable: false,
    transformer: {
      from: (value: string) => new UserName(value),
      to: (userName: UserName) => userName.value,
    },
  })
  readonly name!: UserName;

  @Column({
    type: 'text',
    nullable: false,
    transformer: {
      from: (value: string) => new UserLastname(value),
      to: (userLastname: UserLastname) => userLastname.value,
    },
  })
  readonly lastname!: UserLastname;

  @Column({
    type: 'text',
    nullable: false,
    transformer: {
      from: (value: string) => new UserEmail(value),
      to: (userEmail: UserEmail) => userEmail.value,
    },
  })
  readonly email!: UserEmail;

  @Column({
    type: 'text',
    nullable: false,
    transformer: {
      from: (value: string) => new UserPassword(value),
      to: (userPassword: UserPassword) => userPassword.value,
    },
  })
  readonly password!: UserPassword;

  @OneToOne(() => Profile, { eager: true })
  @JoinColumn()
  readonly profile!: Profile;

  constructor(value?: {
    id: UserId,
    name: UserName,
    lastname: UserLastname,
    email: UserEmail,
    password: UserPassword,
    profile: Profile,
  }) {
    if (value) {
      this.id = value.id;
      this.name = value.name;
      this.lastname = value.lastname;
      this.email = value.email;
      this.password = value.password;
      this.profile = value.profile;
    }
  }

  public static create(value: {
    id: UserId,
    name: UserName,
    lastname: UserLastname,
    email: UserEmail,
    password: UserPassword,
    profile: Profile,
  }): User {
    return new User(value);
  }

  public static withNewPassword(user: User, newPassword: UserPassword) {
    return new User({
      id: user.id,
      name: user.name,
      email: user.email,
      lastname: user.lastname,
      password: newPassword,
      profile: user.profile,
    });
  }
}
