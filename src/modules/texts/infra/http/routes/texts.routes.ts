import {  Router } from 'express'
import {celebrate, Segments, Joi } from 'celebrate'
import TextsController from '../controllers/TextsController'



const textsRouter = Router();
const textsController = new TextsController()


//import ensureAuthenticated from '../middlewares/ensureAuthenticated'


// Rota: receber a requisição, chamar outro arquivo, devolver uma resposta
textsRouter.get('/', textsController.index)
textsRouter.post(
      '/',
      celebrate({
        [Segments.BODY]: {
          dsc_text: Joi.string().required(),
         
        }
      }),
      textsController.create)

  

export default textsRouter