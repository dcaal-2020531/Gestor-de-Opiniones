import {Router} from 'express'
import {updateUserProfile } from './user.controller.js'

const api = Router()

api.put('/:userId',updateUserProfile)


export default api