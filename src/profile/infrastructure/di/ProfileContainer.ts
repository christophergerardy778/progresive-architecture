import { ContainerModule } from 'inversify';
import { AllProfiles } from '../../domain/AllProfiles';
import { AllProfilesTypeOrm } from '../persistence/AllProfilesTypeOrm';
import { profileTypes } from './ProfileTypes';
import { ProfileCreator } from '../../app/create/ProfileCreator';

export const profileContainer = new ContainerModule((bind) => {
  bind < AllProfiles >(profileTypes.allProfiles).to(AllProfilesTypeOrm);
  bind < ProfileCreator >(profileTypes.profileCreator).to(ProfileCreator);
});
