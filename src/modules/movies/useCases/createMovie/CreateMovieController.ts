import { Response, Request } from "express";
import { CreateUserUseCase } from "./CreateMovieUseCase";

export class CreateMovieController {
  async handle(req: Request, res: Response) {
    const { title, duration, release_date } = req.body;

    const createMovieUseCase = new CreateUserUseCase();

    const movie = await createMovieUseCase.execute({
      title,
      duration,
      release_date,
    });

    return movie;
  }
}
