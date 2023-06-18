import { ProfileUsername } from '../../../src/profile/domain/value-object/ProfileUsername';
import { UserEmail } from '../../../src/user/domain/value-object/UserEmail';

describe('Profile username', () => {
  it('Should create a unique username for different domain names', () => {
    const gmailProviderEmail = new UserEmail('christophergerardy778@gmail.com');
    const outlookProviderEmail = new UserEmail('christophergerardy778@outlook.com');

    const usernameForGmailProvider = ProfileUsername.createUsernameDefault(gmailProviderEmail);
    const usernameForOutlookProvider = ProfileUsername.createUsernameDefault(outlookProviderEmail);

    expect(usernameForGmailProvider.equals(usernameForOutlookProvider)).toBeFalsy();
  });
});
