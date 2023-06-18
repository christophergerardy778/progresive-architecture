import { Repository } from 'typeorm';
import { inject, injectable } from 'inversify';
import { AllUsers } from '../../domain/AllUsers';
import { User } from '../../domain/User';
import { Criteria } from '../../../shared/domain/criteria/Criteria';
import { Connection } from '../../../shared/infrastructure/Connection';
import { sharedTypes } from '../../../shared/infrastructure/di/SharedTypes';
import { QueryBuilderAdapter } from '../../../shared/infrastructure/QueryBuilderAdapter';
import { UserTypeOrmMapper } from '../mapper/UserTypeOrmMapper';

@injectable()
export class AllUsersTypeOrm implements AllUsers {
  private readonly repository: Repository<User>;

  private readonly alias = 'user';

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
      alias: this.alias,
      criteria,
      entity: User,
    });

    queryBuilder.leftJoinAndSelect('user.profile', 'profile');
    const result = await queryBuilder.execute();

    return result.map(UserTypeOrmMapper.map);
  }

  async save(user: User): Promise<void> {
    await this.repository.createQueryBuilder(this.alias)
      .insert()
      .into(this.alias)
      .values({
        id: user.id,
        name: user.name,
        email: user.email,
        lastname: user.lastname,
        password: user.password,
        profile: user.profile.id.value,
      })
      .execute();
  }
}
