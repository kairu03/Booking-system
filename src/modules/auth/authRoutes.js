import express from "express";
import { userLogin, userRegister } from "./authController.js";
import { loginSchema, registerSchema } from "./authValidation.js";
import { validate } from "../../middlewares/validate.js";

const router = express.Router()

router.post('/register', validate(registerSchema), userRegister);
router.post('/login', validate(loginSchema), userLogin);

export default router;