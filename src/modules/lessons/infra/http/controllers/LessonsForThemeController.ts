import {Request, Response } from 'express';
import {container} from 'tsyringe'
import { classToClass} from 'class-transformer'
import ListLessonsForThemeService from '@modules/lessons/services/ListLessonsForThemeService'

export default class AudiosController{
  
  public async index(request: Request, response: Response): Promise<Response>{
    
    try{
      const { level_id, theme_id } = request.params
    const listLessonsForTheme= container.resolve(ListLessonsForThemeService)

    const lessons = await listLessonsForTheme.execute(level_id, theme_id)

    return response.json(classToClass(lessons));
    } catch (err) {
      return response.status(400).json({ error: err.message})
    }
  }
  
}