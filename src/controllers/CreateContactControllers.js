import { prisma } from '../database/PrismaCLient.js'

export class CreateContactControllers {
  async handle(req, res) {
    try {
      const {name, phone} = req.body

    await prisma.contact.create({
      data: {
        name,
        phone
      }
    })
    return res.json({mensagem: 'Contato criado com sucesso.'})
    } catch (error) {
      console.log(error)
    }
  }
}