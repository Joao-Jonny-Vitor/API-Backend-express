import { remove } from "../../models/userModel.js"

const deleteUser = async (req, res) => {
    const { id } = req.params

    try {
        const user = await remove(+id)
        return res.json({
            success: "Usuario removido com sucesso!",
            user
        })

    } catch (error) {
        console.log(error)
        if (error?.code === 'P2025') {
            return res.status(404).json({
                error: "Usuario não encontrado"
            })
        }
        next(error)
        return res.status(500).json({
            error: "Ocorreu um erro, tente novamente!"
        })

    }

}
export default deleteUser