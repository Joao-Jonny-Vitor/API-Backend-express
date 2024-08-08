import userModel from "../../models/userModel.js"
const editUser = (req, res) => {
    const users = userModel.getAll()
    res.json(users)
}

export default editUser