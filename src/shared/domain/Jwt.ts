import jwt from 'jsonwebtoken';

export class Jwt {
  // eslint-disable-next-line class-methods-use-this
  public create(payload: any): string {
    return jwt.sign(payload, process.env.JWT_SECRET!);
  }

  // eslint-disable-next-line class-methods-use-this
  public validate(token: string) {
    try {
      jwt.verify(token, process.env.JWT_SECRET!);
      return true;
    } catch (e) {
      return false;
    }
  }
}
