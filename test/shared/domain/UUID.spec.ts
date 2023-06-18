import validator from 'validator';
import {UUID} from '../../../src/shared/domain/UUID';

describe('UUID Generator', () => {
	it('Should generate a valid UUID', () =>  {
		const uuid = UUID.create();
		expect(validator.isUUID(uuid)).toBeTruthy();
	});

	it('Should generate a uuid version 4', () => {
		const uuid = UUID.create();
		expect(validator.isUUID(uuid, 4));
	});
})
