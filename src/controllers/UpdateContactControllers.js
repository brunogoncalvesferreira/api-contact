import {prisma} from '../database/PrismaCLient.js'

export class UpdateContactControllers {
  async handle(req, res) {
    try {
      const {id} = req.params
      const {name, phone} = req.body

      const contact = await prisma.contact.findUnique({where: { id: Number(id)}})

      if(!contact) {
        return res.status(400).json({error: 'Contato não encontrado.'})
      }

      await prisma.contact.update({
        where: {
          id:Number(id)
        },
        data: {
          name,
          phone
        }
      })

      return res.json({mensagem: 'Contato atualizado com sucesso.'})
    } catch (error) {
      console.log(error)
    }
  }
}