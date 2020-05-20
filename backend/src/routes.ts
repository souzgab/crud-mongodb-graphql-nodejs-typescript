import { Router } from 'express'
import UserController from './controllers/User.controller';


const routes = Router();

//Get
routes.get("/users", UserController.getUsers)

//Post
routes.post("/cadastrar", UserController.createUser)

export default routes