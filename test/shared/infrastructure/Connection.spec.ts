import {Connection} from '../../../src/shared/infrastructure/Connection';

const connection = new Connection();

afterAll(async () => {
	await connection.close();
});

describe('Type orm postgres connection', () => {
	it('Should open a postgres connection', async () => {
		await connection.open();
		expect(connection.isConnectionOpen()).toBeTruthy();
	});
});
