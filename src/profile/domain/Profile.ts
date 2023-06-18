import {User} from '../../user/domain/User';
import {ProfilePhoto} from './value-object/ProfilePhoto';
import {ProfileUsername} from './value-object/ProfileUsername';
import {ProfileId} from './value-object/ProfileId';
import {ProfileLastConnection} from './value-object/ProfileLastConnection';

export class Profile {
	readonly id!: ProfileId
	readonly photo!: ProfilePhoto;
	readonly username!: ProfileUsername;
	readonly user!: User;
	readonly lastConnection!: ProfileLastConnection;

	constructor(params: {
		id: ProfileId,
		photo: ProfilePhoto,
		username: ProfileUsername,
		user: User,
		lastConnection: ProfileLastConnection,
	}) {
		this.id = params.id;
		this.photo = params.photo;
		this.username = params.username;
		this.user = params.user;
		this.lastConnection = params.lastConnection;
	}

	public static default(user: User): Profile {
		return new Profile({
			user,
			id: ProfileId.random(),
			photo: ProfilePhoto.empty(),
			lastConnection: ProfileLastConnection.now(),
			username: ProfileUsername.createUsernameDefault(user.email),
		})
	}

	public static create(params: {
		user: User,
		id:ProfileId,
		photo: ProfilePhoto,
		lastConnection: ProfileLastConnection,
	}) {
		return new Profile({
			...params,
			username: ProfileUsername.createUsernameDefault(params.user.email)
		});
	}
}
