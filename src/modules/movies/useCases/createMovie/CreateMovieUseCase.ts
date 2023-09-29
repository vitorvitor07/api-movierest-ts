import { Movie } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { CreateMovieDTO } from "../../dto/CreateMovieDTO";
import { AppError } from "../../../../errors/error";

export class CreateUserUseCase {
  async execute({
    title,
    duration,
    release_date,
  }: CreateMovieDTO): Promise<Movie> {
    // verify user already exists
    const movieAlreadyExists = await prisma.movie.findUnique({
      where: { title },
    });

    if (movieAlreadyExists) {
      // error
      throw new AppError("Movie already exists");
    }

    // create user
    const movie = await prisma.movie.create({
      data: { title, duration, release_date },
    });

    return movie;
  }
}
