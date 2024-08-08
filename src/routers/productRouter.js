import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
    res.json({message: "Rota GET no /product"})
})

router.post('/', (req, res) => {
    res.json({message: "Rota post no /product"})
})

router.put('/', (req, res) => {
    res.json({message: "Rota put no /product"})
})

router.patch('/', (req, res) => {
    res.json({message: "Rota patch no /product"})
})

router.delete('/', (req, res) => {
    res.json({message: "Rota delete no /product"})
})

export default router