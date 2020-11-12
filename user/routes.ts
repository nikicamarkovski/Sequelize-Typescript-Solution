import * as express from 'express';
import { createUser } from './action';

let route = express.Router();


route.post('/user' , createUser)


export default route;