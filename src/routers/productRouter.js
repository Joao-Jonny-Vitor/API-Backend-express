import express from 'express'
import productById from '../controllers/product/productById.js'
import createProduct from '../controllers/product/createProduct.js'
import editProduct from '../controllers/product/editProduct.js'
import editNameProduct from '../controllers/product/editNameProduct.js'
import deleteProduct from '../controllers/product/deleteProduct.js'
import productList from '../controllers/product/productList.js'

const router = express.Router()

router.get('/list', productList)
router.get('/', productById)
router.post('/', createProduct)
router.put('/', editProduct)
router.patch('/', editNameProduct)
router.delete('/', deleteProduct)

export default router