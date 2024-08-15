import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()
const getAll = async () => {
    const products = await prisma.product.findMany()
    return products
}

function create() {
}

export default {getAll, create}