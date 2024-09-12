const logger = (req, res, next) => {

    const now = new Date()

    const yyyy = now.getFullYear()
    const mm = now.getMonth() + 1
    const dd = now.getDate()

    console.log(`${dd+'/'+mm+'/'+yyyy} ${req.method} ${req.url}`)
    next()
}

export default logger