import validator from 'validator';
import { Jwt } from '../../../src/shared/domain/Jwt';
import isJWT = validator.isJWT;

const jwt = new Jwt();

describe('Json web token', () => {
  it('Should create a JWT with json payload', () => {
    const payload = {
      name: 'Christopher Gerardy',
      lastname: 'Andrade Lazcano',
    };

    expect(isJWT(jwt.create(payload))).toBeTruthy();
  });

  it('Should return if is a valid jwt', () => {
    const token = jwt.create({ msg: 'Hello world' });
    expect(jwt.validate(token)).toBeTruthy();
    expect(jwt.validate('INVALID_TOKEN')).toBeFalsy();
  });
});
