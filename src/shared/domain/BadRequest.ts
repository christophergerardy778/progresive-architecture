import { Exception } from './Exception';
import { Primitive } from './Primitive';

export class BadRequest extends Exception {
  public readonly CODE = 400;

  body(): { [p: string]: Primitive } {
    return {
      message: 'Bad Request',
    };
  }

  protected init(): void {
    this.setExceptionMetadata(this, BadRequest);
  }
}
