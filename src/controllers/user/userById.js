import { getById } from "../../models/userModel.js"
const userById = async (req, res) => {
    const {id} = req.params
    const user = await getById(+id)
    if(user)
        return res.json({
            message: "User get by id", 
            user
        })
    else
        return res.status(404).json({
        message: "Usuario não encontrado"
    })
}

export default userById