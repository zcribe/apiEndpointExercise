import express, { type Express, type Request, type Response } from "express";

import User from "./models/user";

const PORT = 3000;
const app: Express = express();

app.get('/api/v1/create-test-user', async (request: Request, response: Response) => {
    const newUser = new User({username: "test"})
    await newUser.save()
    response.status(201).json(newUser)
})

app.get('/api/v1/users', async (request: Request, response: Response) => {
    const users = await User.find({})
    response.json(users)
})


app.listen(PORT, ()=> {
    console.log(`Server running at http://127.0.0.1:${PORT}/api/v1/users`)
})