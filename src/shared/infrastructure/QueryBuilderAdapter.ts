import { inject, injectable } from 'inversify';
import { ObjectLiteral, SelectQueryBuilder } from 'typeorm';
import { Connection } from './Connection';
import { Criteria } from '../domain/criteria/Criteria';
import { sharedTypes } from './di/SharedTypes';
import { Primitive } from '../domain/Primitive';

@injectable()
export class QueryBuilderAdapter {
  constructor(@inject(sharedTypes.connection) private readonly connection: Connection) {
  }

  public run(params: {
    alias: string,
    entity: any,
    criteria: Criteria,
  }): SelectQueryBuilder<ObjectLiteral> {
    const whereQuery: string[] = [];
    const queryValues: { [key: string]: Primitive }[] = [];

    const queryBuilder = this.connection.queryBuilder(
      params.entity,
      params.alias,
    );

    params.criteria.filters.forEach((filter) => {
      const fieldName = filter.fieldName.value;
      const { value } = filter.value;

      whereQuery.push(`${params.alias}.${[fieldName]} = :${[fieldName]}`);
      queryValues.push({ [fieldName]: value });
    });

    queryBuilder.where(
      whereQuery.join(' '),
      Object.assign({}, ...queryValues),
    );

    queryBuilder.orderBy(
      params.criteria.order.orderBy.value,
      params.criteria.order.orderType.value,
    );

    return queryBuilder;
  }
}
