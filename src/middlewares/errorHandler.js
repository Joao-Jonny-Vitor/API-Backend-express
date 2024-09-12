const errorHandler = (err, req, res, next) => {
    if(err){
        console.log()
        return res.status(500).json({
            error: "Erro no servidor, tente novamente!"
        })
    }
}

export default errorHandler