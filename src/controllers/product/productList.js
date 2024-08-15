import productModel from "../../models/productModel.js"

const productList = async(req, res) => {

    const product = await productModel.getAll()
    res.json(product)
}

export default productList