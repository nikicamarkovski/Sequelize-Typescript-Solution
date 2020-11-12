import { Request, Response } from "express";
import db from '../models'
import helper from '../helper';
export const createUser = async (req : Request, res : Response) => {
    if( await helper.checkUsername(req.body.username)) {
     
        
        res.json('Username already exist , please choose another').status(404)
    }else {
    
        db.models.User.create({
            username : req.body.username,
            password : req.body.password
        }).then((newUser: any) => res.json(newUser))
    }

}
export const loginUser = async (req : Request , res : Response) => {
    res.json( await helper.loginUser(req.body.username , req.body.password))
}

