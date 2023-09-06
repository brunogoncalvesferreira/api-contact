import {Router} from 'express'
import { CreateContactControllers } from './controllers/CreateContactControllers.js'
import { ListContactControllers } from './controllers/ListContactControllers.js'
import { UpdateContactControllers } from './controllers/UpdateContactControllers.js'
import { DeleteContactControllers } from './controllers/DeleteContactControllers.js'

const router = Router()

const createContact = new CreateContactControllers()
const listContact = new ListContactControllers()
const updateContact = new UpdateContactControllers()
const deleteContact = new DeleteContactControllers()

router.post('/contact', createContact.handle)
router.get('/contact', listContact.handle)
router.put('/contact/:id', updateContact.handle)
router.delete('/contact/:id', deleteContact.handle)

export { router }