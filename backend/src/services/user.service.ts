import lodash from 'lodash'
import mssql from 'mssql'
import {v4} from 'uuid'
import bcrypt from 'bcryptjs'

import { sqlConfig } from '../config/sql.config';
import { User } from '../interfaces/user';


export class userService{

    async registerUser(user:User){
        let pool = await mssql.connect(sqlConfig)

        let user_id = v4()
        let hashedPassword = bcrypt.hashSync(user.password, 6)

        if(pool.connected){
            //check if email exists
            let emailExists = (await pool.request().input('email', mssql.NVarChar, user.email).query('SELECT * FROM Users WHERE email = @email')).recordset

            
            if(!lodash.isEmpty(emailExists)){
                return{
                    error: "Email already in use"
                }
            }

            let phoneNoExists = (await pool.request().query(`SELECT * FROM Users WHERE phone_number = '${user.phone_number}'`)).recordset

            if(!lodash.isEmpty(phoneNoExists)){
                return {
                    error: "Phone number already in use. Try Another number"
                }
            }

            // let createdAt = new Date(); // Declare and initialize the 'createdAt' variable with the current timestamp
            let result = (await pool.request()
                       
                        .input("id", mssql.VarChar, user_id)
                        .input("FirstName", user.FirstName)
                        .input("LastName", user.LastName)
                        .input("phone_number", user.phone_number)
                        .input("email", user.email)
                        .input("password", hashedPassword)  // Use hashed password here
                        .input("user_image", user.user_image)
                        .input("project_id", user.project_id || null)
                        .input("isAssignedProject", user.isAssignedProject|| '0')
                        .execute("registerUser")).rowsAffected;

            if(result[0] = 1){
                return{
                    message: "Account created successfully"
                }
            }else{
                return{
                    error: "Unable to create Account"
                }
            }
        }else{
            return{
                error: "Unable to establish connection"
            }
        }
        
    }

    async fetchAllUsers(){
        let pool = await mssql.connect(sqlConfig)

        let result = (await pool.request().execute("getAllUsers")).recordset

        if(result.length == 0){
            return{
                message: "No users at the moment"
            }
        }else{
            return{
                users: result
            }
        }
    }
}