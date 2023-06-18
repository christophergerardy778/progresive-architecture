import { mock } from 'jest-mock-extended';
import { ProfileCreator } from '../../../../src/profile/app/create/ProfileCreator';
import { AllProfiles } from '../../../../src/profile/domain/AllProfiles';
import { ProfileMother } from '../../domain/ProfileMother';

const allProfiles = mock<AllProfiles>();
const profileCreator = new ProfileCreator(allProfiles);
const profile = ProfileMother.random();

describe('Profile Creator', () => {
  it('Should create a new profile using profile repository', async () => {
    await profileCreator.run(profile);
    expect(allProfiles.save).toBeCalledWith(profile);
  });
});
