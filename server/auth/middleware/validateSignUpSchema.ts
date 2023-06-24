import Joi from 'joi';
import { NextFunction, Request, Response } from 'express';
import { BadRequest } from '../../../src/shared/domain/BadRequest';
import { schemaValidator } from '../../shared/schemaValidator';
import { errorHandler } from '../../shared/errorHandler';

const signUpSchema = Joi.object({
  name: Joi.string().required(),
  lastname: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

export async function validateSignUpSchema(req: Request, res: Response, next: NextFunction) {
  try {
    await schemaValidator(signUpSchema, req.body);
    next();
  } catch (e) {
    errorHandler(new BadRequest(), res);
  }
}
