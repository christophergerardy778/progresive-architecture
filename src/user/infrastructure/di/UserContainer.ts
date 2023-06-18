import { ContainerModule } from 'inversify';
import { AllUsers } from '../../domain/AllUsers';
import { AllUsersTypeOrm } from '../persistence/AllUsersTypeOrm';
import { userTypes } from './UserTypes';
import { UserCreator } from '../../app/create/UserCreator';
import { SearchUserByEmail } from '../../app/search/SearchUserByEmail';

export const userContainer = new ContainerModule((bind) => {
  bind < AllUsers >(userTypes.allUsers).to(AllUsersTypeOrm);
  bind < UserCreator >(userTypes.userCreator).to(UserCreator);
  bind < SearchUserByEmail >(userTypes.searchUserByEmail).to(SearchUserByEmail);
});
