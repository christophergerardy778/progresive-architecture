import validator from 'validator';
import isJWT = validator.isJWT;
import { CreateJwt } from '../../../../src/auth/app/create/CreateJwt';
import { Jwt } from '../../../../src/shared/domain/Jwt';

const jwt = new Jwt();
const createJwt = new CreateJwt(jwt);

describe('Create JWT', () => {
  it('Should Create a json web token', () => {
    const payload = { user: 'christopher', email: 'christophergerardy778@gmail.com' };
    expect(isJWT(createJwt.run(payload))).toBeTruthy();
  });
});
