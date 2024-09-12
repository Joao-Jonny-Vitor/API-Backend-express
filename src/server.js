//const express = require('express')
import express from 'express'

import userRouter from './routers/userRouter.js'
import productRouter from './routers/productRouter.js'
import { PORT,HOST,ENVIRONMENT } from './config.js'
import logger from './middlewares/logger.js'
import welcome from './controllers/welcome.js'
import routeNotFound from './controllers/routeNotFound.js'
import errorHandler from './middlewares/errorHandler.js'

const app = express()

app.use(logger)

//middleware q faz com que seja possivel converter JSON
app.use(express.json())

app.get('/',welcome)

app.use('/user', userRouter)
app.use('/product', productRouter)
app.use('*', routeNotFound)

app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Servidor rodando no ambiente ${ENVIRONMENT} em ${ENVIRONMENT == 'production' ? HOST : HOST+':'+PORT}`)
})