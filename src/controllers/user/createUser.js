import { create, validateUserToCreate } from "../../models/userModel.js"
const createUser = async (req, res) => {
    try {
        const user = req.body
        const userValidated = validateUserToCreate(user)

        if (userValidated?.error) {
            return res.status(400).json({
                error: "Erro ao criar usuário, verifique os dados!",
                fieldErrors: userValidated.error.flatten().fieldErrors
            })
        }

        const result = await create(userValidated.data)

        
        return res.json({
            success: "POST na rota /user"
        })
    } catch (error) {
        if(error?.code === 'P2002'){
            return res.status(400).json({
                error: "Erro ao criar usuario",
                fieldErrors: { email: ["email ja cadastrado"]}
            })
        }
        next(error)
        console.log(error)
        return res.status(500).json({
            error: "Erro ao criar usuario"
        })
    }
}

export default createUser