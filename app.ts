import * as express from 'express';
import sequelize from './models';
import mainRouter from './mainRouter';
const app = express();
const PORT  = 5000;
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(mainRouter);
sequelize.sync().then(()=> {
    app.listen(PORT , ()=> {
        console.log(`listening on port ${PORT}`)
    })
})  