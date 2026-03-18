import express from "express";
import { protectRoute } from '../../middlewares/auth.js'
import { createResource, deleteResource, getAllResource, getResourceById, updateResource } from "./resourceController.js";
import { authorizeRoles } from "../../middlewares/role.js";
import { attachCategory } from "../../middlewares/attachCategory.js";

const router = express.Router({ mergeParams: true });

// add protecRoute to all routes
router.use(protectRoute);

router.get('/', getAllResource);

router.get('/:resourceId', getResourceById);

router.post('/', authorizeRoles('admin'), attachCategory, createResource);

router.patch('/:resourceId', authorizeRoles('admin'), updateResource);

router.delete('/:resourceId', authorizeRoles('admin'), deleteResource);

export default router;