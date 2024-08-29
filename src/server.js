//const express = require('express')
import express from 'express'

import userRouter from './routers/userRouter.js'
import productRouter from './routers/productRouter.js'
import { PORT,HOST,ENVIRONMENT } from './config.js'

const app = express()

//app.get('/', (req, res) => 
app.use(express.json())
app.use('/user', userRouter)
app.use('/product', productRouter)

app.listen(PORT, () => {
    console.log(`Servidor rodando no ambiente ${ENVIRONMENT} em ${ENVIRONMENT == 'production' ? HOST : HOST+':'+PORT}`)
})