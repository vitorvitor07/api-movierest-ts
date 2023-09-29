import { Request, Response } from "express";
import { getMovieByRealiseDate } from "./getMovieByRealiseDateUseCase";

export class GetMovieByRealiseDateController {
  async handle(req: Request, res: Response) {   
    const getMovieByRealiseDateUseCase = new getMovieByRealiseDate();

    const result = await getMovieByRealiseDateUseCase.execute();

    return res.status(200).json(result);
  }
}