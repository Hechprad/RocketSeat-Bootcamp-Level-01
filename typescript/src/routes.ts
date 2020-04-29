import { Request, Response } from "express";
import createUser from "./services/CreateUser";

const helloWorld = (request: Request, response: Response) => {
  const user = createUser({
    name: "Jorge Hecherat",
    email: "hecherat@gmail.com",
    password: "123456",
    techs: [
      "Node.js",
      "ReactJS",
      "React Native",
      { title: "Javascript", experience: 100 },
    ],
  });

  console.log(user.name);
  return response.json({ message: "Hello World" });
};

export default helloWorld;
