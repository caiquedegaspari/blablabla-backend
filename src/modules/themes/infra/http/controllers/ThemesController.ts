import {Request, Response } from 'express';
import {container} from 'tsyringe'
import { classToClass} from 'class-transformer'
import CreateThemeService from '@modules/themes/services/CreateThemeService'

export default class ThemesController{
  public async create(request: Request, response: Response): Promise<Response>{
    try {
      console.log(request.body)
      const { dsc_theme, level_id } = request.body;

      const createTheme = container.resolve(CreateThemeService)

      const theme = await createTheme.execute(dsc_theme, level_id)

      return response.json(classToClass(theme));
    } catch (err) {
      return response.status(400).json({ error: err.message})
    }
  }
  
}