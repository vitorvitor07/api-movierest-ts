import { User } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { CreateUserDTO } from "../../dto/CreateUserDTO";
import { AppError } from "../../../../errors/error";

export class CreateUserUseCase {
  async execute({ name, email }: CreateUserDTO): Promise<User> {
    // verify user already exists
    const userAlreadyExists = await prisma.user.findUnique({
      where: { email },
    });

    if (userAlreadyExists) {
      // error
      throw new AppError("User already exists");
    }

    // create user
    const user = await prisma.user.create({ data: { name, email } });

    return user;
  }
}
