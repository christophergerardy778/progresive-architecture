import {AllProfiles} from '../../domain/AllProfiles';
import {Profile} from '../../domain/Profile';
import {inject, injectable} from 'inversify';
import {profileTypes} from '../../infrastructure/di/ProfileTypes';

@injectable()
export class ProfileCreator {
	constructor(@inject(profileTypes.allProfiles) private readonly allProfiles: AllProfiles) {
	}
	public async run(profile: Profile) {
		await this.allProfiles.save(profile);
	}
}
