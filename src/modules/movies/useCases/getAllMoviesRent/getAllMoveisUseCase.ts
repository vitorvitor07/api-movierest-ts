import { MovieRent } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

export class GetAllMoviesRentUseCase {
  async execute(): Promise<MovieRent[]> {
    const allMoviesRent = await prisma.movieRent.findMany();

    return allMoviesRent;
  }
}