import Joi from "joi";

// for req.params.id - GET CategoryById && DELETE && PATCH
export const categoryParamsSchema = Joi.object({
  categoryId: Joi.string().length(24).hex().required().messages({
    'any.required': 'Category Id is required',
    'string.length': 'Invalid Category Id',
    'string.hex': 'Invalid Category Id',
  }),
});


// for req.body - POST Category
export const createCategorySchema = Joi.object({
  name: Joi.string().trim().min(4).required().messages({
    'any.required': 'Category name is required',
    'string.min': 'Category name must be at least 4 characters',
    'string.empty': 'Category name is requried',
  }),
  description: Joi.string().trim().max(100).optional().allow('').messages({
    'string.max': 'Description cannot exceed 100 characters',
  }),
  image: Joi.string().trim()
    .pattern(/^https?:\/\/[^\s]+\.(jpg|jpeg|png|webp)$/i)
    .optional()
    .allow('')
    .messages({ 
    'string.pattern.base': 'Image must be a valid URL ending with .jpg, .jpeg, .png, or .webp'
  }),
}); 


// for req.body - PATCH Category
export const updateCategorySchema = Joi.object({
  name: Joi.string().trim().min(4).optional().messages({
    'string.min': 'Category name must be at least 4 characters',
  }),
  desciption: Joi.string().trim().max(100).optional().messages({
    'string.max': 'Description cannot exceed 100 characters',
  }),
  image: Joi.string().trim().uri().optional().messages({
    'string.uri': 'Image must be a valid URL',
  }),
}).min(1) // at least one field must be sent to update






