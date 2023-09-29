import { Response, Request } from "express";
import { CreateMovieRentUseCase } from "./CreateMovieRentUseCases";

export class CreateMovieRentController {
  async handle(req: Request, res: Response) {
    const { userId, movieId } = req.body;

    const createMovieRentController = new CreateMovieRentUseCase();

    await createMovieRentController.execute({
      userId,
      movieId,
    });

    return res.status(201).send();
  }
}
