import * as express from 'express';
import {createPost, getAllPosts} from './action';
let route = express.Router();


route.post('/posts' , createPost)
route.get('/posts' , getAllPosts)

export default route