import productModel from "../../models/productModel";

const editProduct = (req, res) => {

    const product = productModel.getAll()
    res.json(product)
}

export default editProduct