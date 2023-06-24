import { inject, injectable } from 'inversify';
import { Jwt } from '../../../shared/domain/Jwt';
import { sharedTypes } from '../../../shared/infrastructure/di/SharedTypes';

@injectable()
export class CreateJwt {
  // eslint-disable-next-line no-useless-constructor
  constructor(@inject(sharedTypes.jwt) private readonly jwt: Jwt) {
  }

  public run(payload: unknown): string {
    return this.jwt.create(payload);
  }
}
