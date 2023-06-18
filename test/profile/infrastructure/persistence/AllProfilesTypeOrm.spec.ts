import { container } from '../../../../container';
import { AllProfiles } from '../../../../src/profile/domain/AllProfiles';
import { profileTypes } from '../../../../src/profile/infrastructure/di/ProfileTypes';
import { ProfileMother } from '../../domain/ProfileMother';
import { Connection } from '../../../../src/shared/infrastructure/Connection';
import { sharedTypes } from '../../../../src/shared/infrastructure/di/SharedTypes';

const connection = container.get<Connection>(sharedTypes.connection);
const allProfiles = container.get<AllProfiles>(profileTypes.allProfiles);
const profile = ProfileMother.random();

beforeAll(async () => {
  await connection.open();
});

afterAll(async () => {
  await connection.close();
});

describe('All Profiles', () => {
  it('Should save a profile', async () => {
    await allProfiles.save(profile);
  });
});
