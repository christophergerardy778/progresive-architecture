import {User} from './User';
import {Criteria} from '../../shared/domain/criteria/Criteria';

export interface AllUsers {
	all(): Promise<User[]>;
	save(user: User): Promise<void>;
	findByCriteria(criteria: Criteria): Promise<User[]>;
}
