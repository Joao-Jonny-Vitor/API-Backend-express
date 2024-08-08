import productModel from "../../models/productModel";

const productList = (req, res) => {

    const product = productModel.getAll()
    res.json(product)
}

export default productList