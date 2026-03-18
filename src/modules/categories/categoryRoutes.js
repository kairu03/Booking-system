import express from "express";
import { protectRoute } from '../../middlewares/auth.js';
import { authorizeRoles } from '../../middlewares/role.js';
import { createCategory, deleteCategory, getAllCategories, getCategoryById, updateCategory } from "./categoryController.js";
import resourceRoutes from '../../modules/resources/resourceRoutes.js';
import { validate } from "../../middlewares/validate.js";
import { categoryParamsSchema, createCategorySchema, updateCategorySchema } from "./categoryValidation.js";

const router = express.Router();

// add protecRoute to all routes
router.use(protectRoute);

router.get('/', getAllCategories);

router.get('/:categoryId', 
  validate(categoryParamsSchema, 'params'), 
  getCategoryById
);

router.post('/',  
  authorizeRoles('admin'),
  validate(createCategorySchema), 
  createCategory
);

router.patch('/:categoryId',
  authorizeRoles('admin'), 
  validate(categoryParamsSchema, 'params'),
  validate(updateCategorySchema),
  updateCategory
);

router.delete('/:categoryId', 
  authorizeRoles('admin'),
  validate(categoryParamsSchema, 'params'), 
  deleteCategory);

// any route like /categories/:categoryId/resources will go to resourceRoutes
router.use('/:categoryId/resources', resourceRoutes);

export default router;