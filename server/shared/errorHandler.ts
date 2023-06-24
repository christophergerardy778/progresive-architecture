import { Response } from 'express';
import { Exception } from '../../src/shared/domain/Exception';
import { InternalServerError } from '../../src/shared/domain/InternalServerError';

export function errorHandler(error: Error | Exception, res: Response) {
  const internalServerError = new InternalServerError();

  if (error instanceof Exception) {
    return res.status(error.CODE)
      .json(error.body());
  }

  return res.status(internalServerError.CODE)
    .json(internalServerError.body());
}
