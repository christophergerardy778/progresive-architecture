import { Exception } from './Exception';
import { Primitive } from './Primitive';

export class InternalServerError extends Exception {
  readonly CODE: number = 500;

  // eslint-disable-next-line class-methods-use-this
  body(): { [p: string]: Primitive } {
    return {
      message: 'INTERNAL SERVER ERROR',
    };
  }

  init(): void {
    this.setExceptionMetadata(this, InternalServerError);
  }
}
