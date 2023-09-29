import { Router } from "express";
import { CreateMovieController } from "../modules/movies/useCases/createMovie/CreateMovieController";
import { CreateMovieRentController } from "../modules/movies/useCases/createMovieRent/CreateMovieRentController";
import { GetMovieByRealiseDateController } from "../modules/movies/useCases/getMovieByRealiseDate/getMovieByRealiseDateController";
import { GetAllMoviesRentController } from "../modules/movies/useCases/getAllMoviesRent/GetAllMoviesRentController";

const movieRoutes = Router();
const createMovieController = new CreateMovieController();
const createMovieRentController = new CreateMovieRentController();
const getMovieByRealiseDateController = new GetMovieByRealiseDateController();
const getAllUsersController = new GetAllMoviesRentController();


movieRoutes.get("/release", getMovieByRealiseDateController.handle)

movieRoutes.post("/", createMovieController.handle);

movieRoutes.get("/rent", getAllUsersController.handle)
movieRoutes.post("/rent", createMovieRentController.handle);

export { movieRoutes };
