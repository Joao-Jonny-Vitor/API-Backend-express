import userModel from "../../models/userModel.js"
const userById = (req, res) => {
    const users = userModel.getAll()
    res.json(users)
}

export default userById