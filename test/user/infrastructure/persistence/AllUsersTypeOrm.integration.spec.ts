import 'reflect-metadata';
import { Connection } from '../../../../src/shared/infrastructure/Connection';
import { UserMother } from '../../domain/UserMother';
import { container } from '../../../../container';
import { userTypes } from '../../../../src/user/infrastructure/di/UserTypes';
import { AllUsers } from '../../../../src/user/domain/AllUsers';
import { sharedTypes } from '../../../../src/shared/infrastructure/di/SharedTypes';
import { Criteria } from '../../../../src/shared/domain/criteria/Criteria';
import { Filter } from '../../../../src/shared/domain/criteria/Filter';
import { Operator } from '../../../../src/shared/domain/criteria/Operator';
import { Order } from '../../../../src/shared/domain/criteria/Order';
import { profileTypes } from '../../../../src/profile/infrastructure/di/ProfileTypes';
import { AllProfiles } from '../../../../src/profile/domain/AllProfiles';
import { User } from '../../../../src/user/domain/User';

const user = UserMother.random();
const connection = container.get <Connection>(sharedTypes.connection);
const allUsers = container.get <AllUsers>(userTypes.allUsers);
const allProfiles = container.get <AllProfiles>(profileTypes.allProfiles);

beforeAll(async () => {
  await connection.open();
  await allProfiles.save(user.profile);
});

afterAll(async () => {
  await connection.close();
});

describe('All users', () => {
  it('Should save a user', async () => {
    await expect(allUsers.save(user)).resolves.not.toThrow();
  });

  it('Should return all users', async () => {
    const users = await allUsers.all();
    expect(users.length).toBeGreaterThan(0);
  });

  it('Should find a user with email criteria', async () => {
    const criteria = Criteria.from({
      filters: [
        Filter.from({
          fieldName: 'email',
          operator: Operator.EQUALS,
          value: user.email.value,
        }),
      ],
      order: Order.asc('email'),
    });

    const result = await allUsers.findByCriteria(criteria);

    expect(Array.isArray(result)).toBeTruthy();
    expect(result.length).toBeGreaterThan(0);
    expect(result[0] instanceof User).toBeTruthy();
  });
});
