import * as express from 'express';
import { createCategory, getAllCategories } from './action';
let route = express.Router();


route.post('/categoies' , createCategory)
route.get('/categoies' , getAllCategories)

export default route