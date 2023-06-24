import Joi from 'joi';

export async function schemaValidator(schema: Joi.ObjectSchema, payload: any) {
  return schema.validateAsync(payload);
}
