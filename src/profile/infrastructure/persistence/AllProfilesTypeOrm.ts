import {AllProfiles} from '../../domain/AllProfiles';
import {Profile} from '../../domain/Profile';
import {inject, injectable} from 'inversify';
import {sharedTypes} from '../../../shared/infrastructure/di/SharedTypes';
import {Connection} from '../../../shared/infrastructure/Connection';
import {Repository} from 'typeorm';

@injectable()
export class AllProfilesTypeOrm implements AllProfiles {
	private readonly repository!: Repository<Profile>;

	constructor(@inject(sharedTypes.connection) private readonly connection: Connection) {
		this.repository = this.connection.getRepository(Profile);
	}

	async save(profile: Profile): Promise<void> {
		await this.repository.save(profile);
	}
}
