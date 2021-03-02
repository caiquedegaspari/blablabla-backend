import {  Router } from 'express'
import {celebrate, Segments, Joi } from 'celebrate'

import LevelsController from '../controllers/LevelsController'


const levelsRouter = Router();
const levelsController = new LevelsController()


//import ensureAuthenticated from '../middlewares/ensureAuthenticated'


// Rota: receber a requisição, chamar outro arquivo, devolver uma resposta
levelsRouter.post(
      '/',
      celebrate({
        [Segments.BODY]: {
          dsc_level: Joi.string().required(),
        }
      }),
      levelsController.create)

export default levelsRouter