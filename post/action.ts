
import { Request, Response } from "express"


import db from "../models"





export const createPost = (req :Request , res: Response)=> {
 
    db.models.Post.create({
   
        title : req.body.title,
        text : req.body.text,
        categoryId :  db.models.Category.findOne({attributes:['categoryId'] , where :{'name' : req.body.category} }).categoryId  
       
    }).then((newPost : any)=> res.json(newPost))
};

export const getAllPosts = (req : Request , res : Response) => {
    db.models.Post.findAll({
        include : [{ model : db.models.Category , attributes:[ 'name' ]} ]
    }).then((allPosts : any) => res.json(allPosts))
}