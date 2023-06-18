import {allUsersMock} from '../domain/AllUsersMock';
import {SearchUserByEmail} from '../../../src/user/app/Search/SearchUserByEmail';
import {UserMother} from '../domain/UserMother';
import {mockReset} from 'jest-mock-extended';

const user = UserMother.random();
const searchUserByEmail = new SearchUserByEmail(allUsersMock);
beforeEach(() => {
	mockReset(allUsersMock);
});

describe('Search User By Email', () => {
	it('Should and return a user', async () => {
		allUsersMock.findByCriteria.mockReturnValue(
			Promise.resolve([user])
		);

		const result = await searchUserByEmail.run(user.email);

		expect(allUsersMock.findByCriteria).toBeCalled();
		expect(result).not.toBeNull();
	});

	it('Should return null if user not exist', async () => {
		allUsersMock.findByCriteria.mockReturnValue(
			Promise.resolve([])
		);

		const result = await searchUserByEmail.run(user.email);
		expect(allUsersMock.findByCriteria).toBeCalled();
		expect(result).toBeNull();
	});
});
