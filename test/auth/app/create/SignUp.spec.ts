import { mock, mockReset } from 'jest-mock-extended';
import { SignUp } from '../../../../src/auth/app/create/SignUp';
import { UserCreator } from '../../../../src/user/app/create/UserCreator';
import { allUsersMock } from '../../../user/domain/AllUsersMock';
import { SearchUserByEmail } from '../../../../src/user/app/search/SearchUserByEmail';
import { StringHash } from '../../../../src/shared/domain/StringHash';
import { ProfileCreator } from '../../../../src/profile/app/create/ProfileCreator';
import { UserMother } from '../../../user/domain/UserMother';

const user = UserMother.random();

const userByEmailSearcher = mock<SearchUserByEmail>();
const stringHash = mock<StringHash>();
const userCreator = mock<UserCreator>();
const profileCreator = mock<ProfileCreator>();

const registerNewUser = new SignUp(
  stringHash,
  userCreator,
  userByEmailSearcher,
  profileCreator,
);

beforeEach(() => {
  mockReset(allUsersMock);
  mockReset(userByEmailSearcher);
  mockReset(stringHash);
});

describe('Register new user', () => {
  it('Should register a user with default profile', async () => {
    userByEmailSearcher.run.mockReturnValue(Promise.resolve(null));

    await registerNewUser.run(user);

    expect(userByEmailSearcher.run).toBeCalledWith(user.email);
    expect(stringHash.generate).toBeCalledWith(user.password.value);
    expect(userCreator.run).toBeCalled();
    expect(profileCreator.run).toBeCalled();
  });
});
