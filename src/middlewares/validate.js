import { ApiError } from "../utils/apiError.js";

export const validate = (schema, property = 'body') => (req, res, next) => {
  
  // { stripUnknown: true } - remove fields NOT define in my schema/model
  const { value, error } = schema.validate(req[property], { stripUnknown: true });

  if (error) {
    return next(new ApiError(error.details[0].message, 400));
  }

  // use the cleaned, safe, and validated data
  req[property] = value;

  next()
}


 