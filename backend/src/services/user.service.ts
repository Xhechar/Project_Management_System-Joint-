import {User} from "../interfaces/user";
import {v4} from 'uuid'
let Users: User[] =[]

export class userService{

    createUser(us:User){
        let newUser:User = {
            user_id: v4(),
            FirstName: us.FirstName,
            LastName: us.LastName,
            phone_number: us.phone_number,
            email: us.email,
            password: us.password,
            user_profile: us.user_profile,
            project_id: us.project_id,
            project_status: us.project_status
        }

        Users.push(newUser);

        return newUser
    }
}