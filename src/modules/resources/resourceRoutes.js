import express from "express";
import { protectRoute } from '../../middlewares/authMiddleware.js'
import { createResource, deleteResource, getAllResource, getResourceById, updateResource } from "./resourceController.js";

const router = express.Router();

router.use(protectRoute);

router.get('/', getAllResource);

router.get('/:id', getResourceById);

router.post('/', createResource);

router.put('/:id', updateResource);

router.delete('/:id', deleteResource);

export default router;