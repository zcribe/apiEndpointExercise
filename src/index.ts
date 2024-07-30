import express, { Express, Request, Response } from "express";

const PORT = 3000;
const app: Express = express();

app.get('/api/v1/', (request: Request, response: Response) => {
    response.send("Hello World!")
})

app.listen(PORT, ()=> {
    console.log('Server running')
})