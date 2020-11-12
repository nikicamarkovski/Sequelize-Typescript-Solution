import db from './models'


class Helper {
    constructor(){};

    async checkUsername (username:string ) : Promise<boolean> {
       let user = await db.models.User.findOne({where : {'username' : username } });
       if(user) {
           console.log('da')
           return true
       }else {
           return false
       }
    
}
   async loginUser (username: string , password : string) : Promise<string> {
        let userLogin = await db.models.User.findOne({where : {'username' : username}});
        if(!userLogin) {
            return "Wrong Username"
        }
        else if(userLogin.password !== password) {
            return "Wrong Password" 
        } else {
            return "Success!"
        }
   }

}
export default new Helper();