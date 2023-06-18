import {User} from '../../../user/domain/User';
import {SearchUserByEmail} from '../../../user/app/search/SearchUserByEmail';
import {UserCreator} from '../../../user/app/create/UserCreator';
import {UserEmail} from '../../../user/domain/value-object/UserEmail';
import {StringHash} from '../../../shared/domain/StringHash';
import {UserPassword} from '../../../user/domain/value-object/UserPassword';
import {UserEmailAlreadyTaken} from '../../../user/domain/UserEmailAlreadyTaken';
import {ProfileCreator} from '../../../profile/app/create/ProfileCreator';
import {Profile} from '../../../profile/domain/Profile';
import {inject, injectable} from 'inversify';
import {sharedTypes} from '../../../shared/infrastructure/di/SharedTypes';
import {userTypes} from '../../../user/infrastructure/di/UserTypes';
import {profileTypes} from '../../../profile/infrastructure/di/ProfileTypes';

@injectable()
export class SignUp {

	constructor(
		@inject(sharedTypes.stringHash)
		private readonly stringHash: StringHash,

		@inject(userTypes.userCreator)
		private readonly userCreator: UserCreator,

		@inject(userTypes.searchUserByEmail)
		private readonly searchUserByEmail: SearchUserByEmail,

		@inject(profileTypes.profileCreator)
		private readonly profileCreator: ProfileCreator,
	) {
	}

	public async run(profile: Profile): Promise<void> {
		const {user} = profile;
		const isEmailAlreadyTaken = await this.isEmailAlreadyTaken(user.email);

		if (isEmailAlreadyTaken) {
			throw new UserEmailAlreadyTaken();
		}

		const userWithEncryptedPassword = await this.createUserWithEncryptedPassword(user);

		await this.saveUser(userWithEncryptedPassword);
		await this.saveProfile(profile);
	}

	private async isEmailAlreadyTaken(email: UserEmail): Promise<boolean> {
		const result = await this.searchUserByEmail.run(email);
		return result === null;
	}

	private async createUserWithEncryptedPassword(user: User): Promise<User> {
		const password = await this.stringHash.generate(user.password.value);
		return User.withNewPassword(user, UserPassword.from(password));
	}

	private async saveUser(user: User): Promise<void> {
		await this.userCreator.run(user);
	}

	private async saveProfile(profile: Profile): Promise<void> {
		await this.profileCreator.run(profile)
	}
}
