import { create } from "../../models/userModel.js"
const createUser = async (req, res) => {

    const user = req.body
    const result = await create(user)
    
    if(!result){
        return res.status(500).json({
            error: "Erro ao criar usuario"
        })
    }
    return res.json({
        success:"POST na rota /user"})
}

export default createUser