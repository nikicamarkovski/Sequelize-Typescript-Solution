import "./connection";
import {Sequelize} from 'sequelize-typescript';
import { Category } from './Category';
 import {Post} from './Post';
 import {User} from './User';


console.log()
 
const sequelize =  new Sequelize({
        database: process.env.DB_DATABASE ,
        dialect: 'mysql',
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,

        models: [Post , User , Category]
});
export default sequelize;

