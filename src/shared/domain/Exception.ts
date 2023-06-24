import { Primitive } from './Primitive';

export abstract class Exception extends Error {
  abstract readonly CODE: number;

  abstract body(): { [key: string]: Primitive };

  protected abstract init(): void;

  public constructor() {
    super();
    this.init();
  }

  // eslint-disable-next-line class-methods-use-this
  protected setExceptionMetadata(context: any, exception: any) {
    Object.setPrototypeOf(context, exception.prototype);
  }
}
