import {UserCreator} from '../../../src/user/app/Create/UserCreator';
import {UserMother} from '../domain/UserMother';
import {allUsersMock} from '../domain/AllUsersMock';
import {SearchUserByEmail} from '../../../src/user/app/Search/SearchUserByEmail';

const searchUserByEmail = new SearchUserByEmail(allUsersMock);
const userCreator = new UserCreator(
	allUsersMock,
	searchUserByEmail,
);

describe('User creator', () => {
	it('Should save a user', async () => {
		allUsersMock.findByCriteria.mockReturnValue(Promise.resolve([]));

		await userCreator.run(UserMother.random());
		expect(allUsersMock.save).toBeCalled();
	});
});
