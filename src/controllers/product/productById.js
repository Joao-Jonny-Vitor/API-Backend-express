import productModel from "../../models/productModel";

const productById = (req, res) => {

    const product = productModel.getAll()
    res.json(product)
}

export default productById