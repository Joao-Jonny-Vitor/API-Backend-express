const routeNotFound = (req,res) => {
    res.status(404).json({message: "Rota não encontrada"})}

export default routeNotFound