import { Router } from "express";
import { userRoutes } from "./user.routes";
import { movieRoutes } from "./movie.routes";

const routes = Router();

// Users routes
routes.use("/users", userRoutes);

// Movies routes
routes.use("/movies", movieRoutes);

export { routes };
