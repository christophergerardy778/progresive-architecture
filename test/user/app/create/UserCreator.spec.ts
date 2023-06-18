import {UserCreator} from '../../../../src/user/app/create/UserCreator';
import {UserMother} from '../../domain/UserMother';
import {allUsersMock} from '../../domain/AllUsersMock';

const user = UserMother.random();

const userCreator = new UserCreator(
	allUsersMock,
);

describe('User creator', () => {
	it('Should save a user', async () => {
		await userCreator.run(user);
		expect(allUsersMock.save).toBeCalled();
		expect(allUsersMock.save).toBeCalledWith(user);
	});
});
