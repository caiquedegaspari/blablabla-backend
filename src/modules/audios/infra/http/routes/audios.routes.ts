import {  Router } from 'express'
import {celebrate, Segments, Joi } from 'celebrate'
import AudiosController from '../controllers/AudiosController'



const audiosRouter = Router();
const audiosController = new AudiosController()


//import ensureAuthenticated from '../middlewares/ensureAuthenticated'


// Rota: receber a requisição, chamar outro arquivo, devolver uma resposta
audiosRouter.get('/', audiosController.index)
audiosRouter.post(
      '/',
      celebrate({
        [Segments.BODY]: {
          dsc_audio: Joi.string().required(),
          audio_url: Joi.string().uri().required(),
        }
      }),
      audiosController.create)

  

export default audiosRouter