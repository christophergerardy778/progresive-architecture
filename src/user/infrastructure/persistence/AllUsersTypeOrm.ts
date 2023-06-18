import { Repository } from 'typeorm';
import { inject, injectable } from 'inversify';
import { AllUsers } from '../../domain/AllUsers';
import { User } from '../../domain/User';
import { Criteria } from '../../../shared/domain/criteria/Criteria';
import { Connection } from '../../../shared/infrastructure/Connection';
import { sharedTypes } from '../../../shared/infrastructure/di/SharedTypes';
import { QueryBuilderAdapter } from '../../../shared/infrastructure/QueryBuilderAdapter';

@injectable()
export class AllUsersTypeOrm implements AllUsers {
  private readonly repository: Repository<User>;

  constructor(
    @inject(sharedTypes.connection) private connection: Connection,
    @inject(sharedTypes.queryBuilderAdapter) private queryBuilderAdapter: QueryBuilderAdapter,
  ) {
    this.repository = connection.getRepository(User);
  }

  all(): Promise<User[]> {
    return this.repository.find();
  }

  async findByCriteria(criteria: Criteria): Promise<User[]> {
    const queryBuilder = this.queryBuilderAdapter.run({
      alias: 'user',
      criteria,
      entity: User,
    });

    return queryBuilder.execute();
  }

  async save(user: User): Promise<void> {
    await this.repository.save(user);
  }
}
