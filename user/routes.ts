import * as express from 'express';
import { createUser, loginUser } from './action';

let route = express.Router();


route.post('/user' , createUser)
route.post('/login' , loginUser)

export default route;