import productModel from "../../models/productModel";

const createProduct = (req, res) => {

    const product = productModel.getAll()
    res.json(product)
}

export default createProduct