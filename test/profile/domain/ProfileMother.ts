import { Profile } from '../../../src/profile/domain/Profile';
import {UserMother} from '../../user/domain/UserMother';
import {ProfilePhoto} from '../../../src/profile/domain/value-object/ProfilePhoto';
import {faker} from '@faker-js/faker';
import {ProfileLastConnection} from '../../../src/profile/domain/value-object/ProfileLastConnection';
import {ProfileId} from '../../../src/profile/domain/value-object/ProfileId';

export class ProfileMother {
	public static random(): Profile {
		const user = UserMother.random();

		return Profile.create({
			user,
			photo: new ProfilePhoto(faker.image.avatar()),
			lastConnection: ProfileLastConnection.now(),
			id: ProfileId.random(),
		})
	}
}
