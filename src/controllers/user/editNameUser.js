import userModel from "../../models/userModel.js"
const editNameUser = (req, res) => {
    const users = userModel.getAll()
    res.json(users)
}

export default editNameUser