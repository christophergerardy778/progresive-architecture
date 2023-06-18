import bcryptjs from 'bcryptjs';

export class Hash {
	private static readonly ROUNDS = 10;

	public static async generate(value: string): Promise<string> {
		const salt = await bcryptjs.genSalt(Hash.ROUNDS);
		return bcryptjs.hash(value, salt);
	}

	public static match(value: string, hash: string): Promise<boolean> {
		return bcryptjs.compare(value, hash)
	}
}
