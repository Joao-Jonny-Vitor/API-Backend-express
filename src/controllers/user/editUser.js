import { update } from "../../models/userModel.js"
const editUser = async (req, res) => {
    const {id} = req.params
    const user = req.body

    user.id = +id

    const result = await update(user)

    if(!result){
        return res.status(401).json({
            error: "Erro ao criar usuario"
        })
    }
    return res.json({
        success:"Usuario atualizado com sucesso",
        user: result
    })
}

export default editUser