import { Request, Response } from "express";
import db from '../models'

export const createCategory = (req : Request, res : Response) => {
   db.models.Category.create({
       name : req.body.name
   }).then((newCategory: any) => res.json(newCategory))
}

export const getAllCategories = (req: Request , res : Response) => {
    db.models.Category.findAll().then((allCategories: any) => res.json(allCategories))

 
}