import express, {
  type Express,
  type Request,
  type Response,
  type NextFunction,
} from "express";

import User from "./models/user";

const PORT: number = 3000;
const app: Express = express();

app.get(
  "/api/v1/create-test-user",
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const newUser = new User({ username: "test" });
      await newUser.save();
      response.status(201).json(newUser);
    } catch (error) {
      response.status(500).send("Internal Server Error");
    }
  }
);

app.get("/api/v1/users", async (request: Request, response: Response) => {
  try {
    const users = await User.find({});
    response.status(200).json(users);
  } catch (error) {
    response.status(500).send("Internal Server Error");
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://127.0.0.1:${PORT}/api/v1/users`);
});
