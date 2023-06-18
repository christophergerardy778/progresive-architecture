import { faker } from '@faker-js/faker';
import { EmailValidator } from '../../../src/email/domain/EmailValidator';

const emailValidator = new EmailValidator();

describe('Email validator', () => {
  it('Should validate a correct email', () => {
    const correctEmail = faker.internet.email();
    expect(emailValidator.run(correctEmail)).toBeTruthy();
  });

  it('Should return false with wrong email', () => {
    const wrongEmail = faker.internet.domainName();
    expect(emailValidator.run(wrongEmail)).toBeFalsy();
  });
});
