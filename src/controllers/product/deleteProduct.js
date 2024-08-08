import productModel from "../../models/productModel";

const deleteProduct = (req, res) => {

    const product = productModel.getAll()
    res.json(product)
}

export default deleteProduct