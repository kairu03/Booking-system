import { asyncHandler } from "../../utils/asyncHandler.js";
import { loginUser, registerUser } from "./authService.js";

export const userRegister = asyncHandler(async (req, res) => {

  // extract name, email, password from req body
  const { name, email, password } = req.body;

  // create new user
  const newUser = await registerUser({
    name,
    email,
    password
  });

  // return user info to frontend with token
  return res.status(200).json(newUser);
});


export const userLogin = asyncHandler(async (req, res) => {

  // extract email, password form req body
  const { email, password } = req.body;

  const loggedInUser = await loginUser({
    email,
    password
  });

  return res.status(200).json(loggedInUser)
});