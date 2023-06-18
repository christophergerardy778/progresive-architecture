import {StringHash} from '../../../src/shared/domain/StringHash';

const stringHash = new StringHash();
const noHashedString = 'Hello world';

describe('String Hashing', () => {
	it('Should hash and string', async () => {
		const hash = await stringHash.generate(noHashedString)
		expect(hash).not.toBe(noHashedString);
	});

	it('Should return true if raw string match with hashed string', async () => {
		const hash = await stringHash.generate(noHashedString);
		expect(stringHash.match(noHashedString, hash)).toBeTruthy();
	});
});
