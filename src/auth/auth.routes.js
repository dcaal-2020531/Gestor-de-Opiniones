import { Router } from 'express'
import { 
    login,
    register,
    test
 } from './auth.controller.js'

const api = Router()

//Rutas públicas
api.post('/register', register)
api.post('/login', login)

//Rutas privadas
                //middleware
api.get('/test', test)

//Exportar
export default api