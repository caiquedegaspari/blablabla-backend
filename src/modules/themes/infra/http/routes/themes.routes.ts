import {  Router } from 'express'
import {celebrate, Segments, Joi } from 'celebrate'

import ThemesController from '../controllers/ThemesController'
import ThemesLevelController from '../controllers/ThemesLevelController'


const themesRouter = Router();
const themesController = new ThemesController()
const themesLevelController = new ThemesLevelController()


//import ensureAuthenticated from '../middlewares/ensureAuthenticated'


// Rota: receber a requisição, chamar outro arquivo, devolver uma resposta
themesRouter.get('/:level_id', themesLevelController.index)
themesRouter.post(
      '/',
      celebrate({
        [Segments.BODY]: {
          dsc_theme: Joi.string().required(),
          level_id: Joi.string().uuid().required()
        }
      }),
      themesController.create)

  

export default themesRouter