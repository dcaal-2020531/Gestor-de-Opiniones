import {Router} from 'express'
import { save, deleteCategory, updateCategories } from './category.controller.js'

const api = Router()

api.post('/',save)
api.put('/categoryId',updateCategories)
api.delete('/categoryId',deleteCategory)


export default api