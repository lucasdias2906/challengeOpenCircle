import "reflect-metadata"
import express from 'express'
import routes from './routes/index'
import swaggerUi from 'swagger-ui-express'

import dotenv from 'dotenv'
dotenv.config()


import swaggerDocs from './swagger.json';

const host = process.env.TYPEORM_CONNECTION

console.log("HSOS", host)

import './config/data-source'

const app = express()
app.use(express.json())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
app.use(routes)

app.listen(process.env.PORT, () => console.log(`I can conection in your port ${process.env.PORT}`))