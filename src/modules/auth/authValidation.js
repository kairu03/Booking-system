import Joi from "joi";
import passwordComplexity from 'joi-password-complexity';

// for req.body - POST Register
export const registerSchema = Joi.object({
  name: Joi.string().trim().min(3).max(30).required().messages({
    'any.required': 'Name is required',
    'string.min': 'Name must be at least 3 characters',
    'string.empty': 'Name is required',
  }),
  email: Joi.string().trim().email().required().messages({
    'any.required': 'Email is required',
    'string.email': 'Email must be in valid format',
    'string.empty': 'Email is required',
  }),
  password: passwordComplexity({
    min: 8,
    max: 30,
    lowerCase: 1,
    upperCase: 1,
    symbol: 0,
    numeric: 0,
    requirementCount: 4
  }).required().messages({
    'any.required': 'Password is required',
    'passwordComplexity.tooShort': 'Password must be at least 8 characters',
    'passwordComplexity.tooLong': 'Password cannot exceed 30 characters',
    'passwordComplexity.lowercase': 'Password must have at least 1 lowercase character',
    'passwordComplexity.uppercase': 'Password must have at least 1 uppercase character',
  }),
});


// for req.body - POST Login
export const loginSchema = Joi.object({
  email: Joi.string().trim().email().required().messages({
    'any.required': 'Email is required',
    'string.email': 'Email must be in valid format',
    'string.empty': 'Email is required',
  }),
  password: Joi.string().required().messages({
    'any.required': 'Password is required',
    'string.empty': 'Password is required',
  }),
});