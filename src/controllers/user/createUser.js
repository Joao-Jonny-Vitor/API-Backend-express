import userModel from "../../models/userModel.js"
const createUser = (req, res) => {
    const users = userModel.getAll()
    res.json(users)
}

export default createUser