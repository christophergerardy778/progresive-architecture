import {User} from '../domain/User';
import {AllUsers} from '../domain/AllUsers';
import {UserEmail} from '../domain/value-object/UserEmail';
import {Criteria} from '../../shared/domain/criteria/Criteria';
import {Filter} from '../../shared/domain/criteria/Filter';
import {FieldName} from '../../shared/domain/criteria/FieldName';
import {FilterOperator} from '../../shared/domain/criteria/FilterOperator';
import {Operator} from '../../shared/domain/criteria/Operator';
import {Order} from '../../shared/domain/criteria/Order';

export class SearchUserByEmail {
	constructor(private allUsers: AllUsers) {
	}

	public async run(userEmail: UserEmail): Promise<User | null> {
		const criteria = this.makeCriteriaToFindUserByEmail(userEmail);
		const users = await this.allUsers.findByCriteria(criteria);

		if (users.length > 0) {
			return users[0];
		}

		return null;
	}

	private makeCriteriaToFindUserByEmail(userEmail: UserEmail) {
		return Criteria.from({
			order: Order.asc('email'),
			filters: [
				Filter.create({
					fieldName: new FieldName('email'),
					operator: new FilterOperator(Operator.EQUALS),
					value: userEmail
				})
			],
		});
	}
}
