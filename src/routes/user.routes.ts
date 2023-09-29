import { Router } from "express";
import { CreateUserController } from "../modules/users/useCases/crateUser/CreateUserController";
import { GetAllUsersController } from "../modules/users/useCases/getAllUsers/getAllUsersController";

const userRoutes = Router();
const createUserController = new CreateUserController();
const getAllUsers = new GetAllUsersController();

userRoutes.post("/", createUserController.handle);
userRoutes.get("/", getAllUsers.handle);

export { userRoutes };