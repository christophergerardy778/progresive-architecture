import { DataSource, Repository } from 'typeorm';
import { injectable } from 'inversify';
import { User } from '../../user/domain/User';
import { Profile } from '../../profile/domain/Profile';

@injectable()
export class Connection {
  private readonly connection!: DataSource;

  constructor() {
    this.connection = new DataSource({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      synchronize: true,
      logging: false,
      entities: [User, Profile],
      subscribers: [],
      migrations: [],
    });
  }

  async open(): Promise<void> {
    await this.connection.initialize();
  }

  isConnectionOpen(): boolean {
    return this.connection.isInitialized;
  }

  getRepository(entity: any): Repository<any> {
    return this.connection.getRepository(entity);
  }

  query(query: string, parameters?: any[]) {
    return this.connection.query(query, parameters);
  }

  queryBuilder(entity: any, alias: string) {
    return this.connection.createQueryBuilder(entity, alias);
  }

  async close(): Promise<void> {
    await this.connection.destroy();
  }
}
