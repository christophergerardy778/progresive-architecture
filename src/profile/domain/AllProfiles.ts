import { Profile } from './Profile';

export interface AllProfiles {
  save(profile: Profile): Promise<void>;
}
