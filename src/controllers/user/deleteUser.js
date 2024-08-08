import userModel from "../../models/userModel.js"
const deleteUser = (req, res) => {
    const users = userModel.getAll()
    res.json(users)
}

export default deleteUser