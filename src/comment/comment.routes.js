import {Router} from 'express'
import { save, deleteComment, updateComments } from './comment.controller.js'

const api = Router()

api.post('/',save)
api.put('/:commentId',updateComments)
api.delete('/:commentId',deleteComment)

export default api