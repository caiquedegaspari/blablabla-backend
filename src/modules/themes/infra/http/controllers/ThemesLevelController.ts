import {Request, Response } from 'express';
import {container} from 'tsyringe'
import { classToClass} from 'class-transformer'
import ListThemesByLevelService from '@modules/themes/services/ListThemesByLevelService'
import AppError from '@shared/errors/AppError';

export default class ThemesLevelController{
  public async index(request: Request, response: Response): Promise<Response>{
    try {
      console.log('In controller')
      const { level_id } = request.params;
      console.log('In controller', level_id)
      const listThemesByLevel = container.resolve(ListThemesByLevelService)

      if(level_id){
      const theme = await listThemesByLevel.execute(level_id.toString())

        return response.json(classToClass(theme));
      }
      else{
        throw new AppError('Cannot complete request without level id')  
      }
    } catch (err) {
      return response.status(400).json({ error: err.message})
    }
  }
  
}