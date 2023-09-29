import { MovieRent } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { MovieRentDTO } from "../../dto/CreateMovieRentDTO";
import { AppError } from "../../../../errors/error";

export class CreateMovieRentUseCase {
  async execute({ userId, movieId }: MovieRentDTO): Promise<void> {
    // verify movie exists
    const movieExists = await prisma.movie.findUnique({
      where: { id: movieId },
    });

    if (!movieExists) {
      throw new AppError("Movie does not exists!");
    }
    // verify movie is rented
    const movieAlreadyRented = await prisma.movieRent.findFirst({
      where: { movieId },
    });

    if (movieAlreadyRented) {
      throw new AppError("Movie already rented!");
    }

    // verify user exists
    const userExists = await prisma.user.findUnique({ where: { id: userId } });

    if (!userExists) {
      throw new AppError("User does not exist!");
    }

    // create rent
    await prisma.movieRent.create({ data: { userId, movieId } });
  }
}
