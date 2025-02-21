'use strict'

// ECModules | ESModules
import express from 'express' //Servidor HTTP
import morgan from 'morgan' //Logs
import helmet from 'helmet' //Seguridad para HTTP
import cors from 'cors' //Acceso al API
import authRoutes from '../src/auth/auth.routes.js'
import postRoutes from '../src/post/post.routes.js'
import commentRoutes from '../src/comment/comment.routes.js'
import categoryRoutes from '../src/category/category.routes.js'
import userRoutes from '../src/user/user.routes.js'

const configs = (app)=>{
    app.use(express.json()) //Aceptar y enviar datos en JSON
    app.use(express.urlencoded({extended: false})) //No encriptar la URL
    app.use(cors())
    app.use(helmet())
    app.use(morgan('dev'))
}

const routes = (app)=>{
    app.use(authRoutes)
    app.use('/v1/post',postRoutes)
    app.use('/v1/comment', commentRoutes)
    app.use('/v1/category',categoryRoutes)
    app.use('/v1/user',userRoutes)
}

export const initServer = async()=>{
    const app = express() 
    try{
        configs(app) 
        routes(app)
        app.listen(process.env.PORT)
        console.log(`Server running in port ${process.env.PORT}`)
    }catch(err){
        console.error('Server init failed', err)
    }
}