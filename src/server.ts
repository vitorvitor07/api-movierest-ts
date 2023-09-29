import "express-async-errors";
import express, { NextFunction, Request, Response } from "express";
import { routes } from "./routes";
import { AppError } from "./errors/error";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(routes);

app.use(
  (err: Error, request: Request, respose: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return respose.status(err.statusCode).json({
        status: "error",
        message: err.message,
      });
    }

    return respose.status(500).json({
      status: "error",
      message: `Internal server error - ${err.message}`,
    });
  }
);

app.listen(port, () => console.log(`🤖 Server listening on port: ${port} 🚀`));
