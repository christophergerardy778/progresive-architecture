import bcryptjs from 'bcryptjs';
import { injectable } from 'inversify';

@injectable()
export class StringHash {
  private readonly ROUNDS = 10;

  public async generate(value: string): Promise<string> {
    const salt = await bcryptjs.genSalt(this.ROUNDS);
    return bcryptjs.hash(value, salt);
  }

  public match(value: string, hash: string): Promise<boolean> {
    return bcryptjs.compare(value, hash);
  }
}
