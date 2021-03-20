import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers;

    try {
      const listAllUsers = this.listAllUsersUseCase.execute({
        user_id: user_id.toString(),
      });
      return response.status(200).json(listAllUsers);
    } catch {
      return response
        .status(400)
        .json({ error: "User does not have permission!" });
    }
  }
}

export { ListAllUsersController };
