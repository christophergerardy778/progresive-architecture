import {UserCreator} from '../../app/create/UserCreator';

export const userTypes = {
	allUsers: Symbol('allUsers'),
	userCreator: Symbol('user-creator'),
	searchUserByEmail: Symbol('search-user-by-email')
}
