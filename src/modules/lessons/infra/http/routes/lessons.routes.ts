import {  Router } from 'express'
import {celebrate, Segments, Joi } from 'celebrate'
import LessonsController from '../controllers/LessonsController'
import LessonsForThemeController from '../controllers/LessonsForThemeController'



const lessonsRouter = Router();
const lessonsController = new LessonsController()
const lessonsForThemeController = new LessonsForThemeController()


//import ensureAuthenticated from '../middlewares/ensureAuthenticated'


// Rota: receber a requisição, chamar outro arquivo, devolver uma resposta
lessonsRouter.get('/:level_id/:theme_id', lessonsForThemeController.index)
lessonsRouter.post(
      '/',
      celebrate({
        [Segments.BODY]: {
          text_array: Joi.array().required(),
          audio_array: Joi.array().required(),
          level_id: Joi.string().uuid().required(),
          theme_id: Joi.string().uuid().required(),
        }
      }),
      lessonsController.create)

  

export default lessonsRouter