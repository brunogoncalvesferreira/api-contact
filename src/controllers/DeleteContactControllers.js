import {prisma} from '../database/PrismaCLient.js'

export class DeleteContactControllers {
  async handle(req, res) {
    try {
      const {id} = req.params

      const contact = await prisma.contact.findUnique({where: {id: Number(id)}})

      if(!contact) {
        return res.status(400).json({error: 'Contato não encontrado.'})
      }

      await prisma.contact.delete({
        where: {id: Number(id)}
      })

      return res.json({Mensagem: 'Contato deletado com sucesso.'})
    } catch (error) {
      console.log(error)
    }
  }
}