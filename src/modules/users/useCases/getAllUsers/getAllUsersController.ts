import { Response, Request } from "express";
import { GetAllUsersUseCase } from "./getAllUsersUseCase";

export class GetAllUsersController {
  async handle(req: Request, res: Response) {
    const getAllUsersUseCase = new GetAllUsersUseCase();

    const result = await getAllUsersUseCase.execute();

    return res.status(200).json(result);
  }
}