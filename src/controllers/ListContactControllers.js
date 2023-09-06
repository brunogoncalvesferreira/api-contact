import {prisma} from '../database/PrismaCLient.js'

export class ListContactControllers {
  async handle(req, res) {
    try {
      const contact = await prisma.contact.findMany()

      return res.json(contact)
      
    } catch (error) {
      console.log(error)
    }
  }
}
