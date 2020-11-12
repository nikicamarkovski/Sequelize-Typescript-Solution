import db from './models'
class Helper {
    constructor(){};

    async CheckUsername (username:string ) {
       let user = await db.models.User.findOne({where : {'username' : username } });
       if(user) {
           console.log('da')
           return true
       }else {
           return false
       }
    
}
}

export default new Helper();