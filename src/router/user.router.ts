import {Router} from 'express'
import { addUser } from '../controller/user.controller'

let user_router = Router()

user_router.post('/create-new',addUser)

export default user_router
