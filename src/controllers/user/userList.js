//import userModel from "../../models/userModel.js"

const userList = async(req, res) => {

    //const users = await userModel.getAll()
    const users = []
    res.json(users)
}

export default userList