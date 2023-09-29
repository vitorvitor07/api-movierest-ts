import { Request, Response } from "express";
import { GetAllMoviesRentUseCase } from "./getAllMoveisUseCase";

export class GetAllMoviesRentController {
  async handle(req: Request, res: Response) {
    const getAllMoviesRentUseCase = new GetAllMoviesRentUseCase();

    const result = await getAllMoviesRentUseCase.execute();

    return res.status(200).json(result);
  }
}