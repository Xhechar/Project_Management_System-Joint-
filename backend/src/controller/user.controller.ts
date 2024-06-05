import { Request, Response } from "express";
import { userService } from "../services/user.service";

let useService = new userService()

let addUser = async(req:Request, res:Response)=> {
    try {
        let {FirstName, LastName, phone_number, email, password, user_profile, project_id, project_status} = req.body

        let response = useService.createUser(req.body)

        return res.json({user:response})
    } catch (error) {
        return res.json({
            error: error
        })
    }
}

export {
    addUser
}