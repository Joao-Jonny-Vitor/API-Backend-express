import userModel from "../../models/userModel.js"

const userList = async(req, res) => {

    const users = await userModel.getAll()

    res.json(users)
}

export default userList