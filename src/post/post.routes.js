import {Router} from 'express'
import { save, deletePost, updatePosts } from './post.controller.js'

const api = Router()

api.post('/',save)
api.put('/:postId',updatePosts)
api.delete('/:postId',deletePost)


export default api