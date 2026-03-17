import { ApiError } from "../utils/apiError.js";

export const validate = (schema) => (req, res, next) => {
  
  // { stripUnknown: true } - remove fields NOT define in my schema/model
  const { value, error } = schema.validate(req.body, { stripUnknown: true });

  if (error) {
    return next(new ApiError(error.details[0].message, 400));
  }

  // use the validated, cleaned and safe data
  req.body = value;

  next()
}



