import {injectable, inject} from 'tsyringe'

import AppError from '@shared/errors/AppError'
import IThemesRepository from '@modules/themes/repositories/IThemesRepository'
import Theme from '../infra/typeorm/entities/Theme'

@injectable()
class CreateThemeService {

  constructor( @inject('ThemesRepository')
  private themesRepository: IThemesRepository,
  ) { }

  public async execute(dsc_theme: string, level_id: string): Promise<Theme>{
     
    const themeExists = await this.themesRepository.findThemeByDescription(dsc_theme, level_id)
    
    if(themeExists){
      throw new AppError('A theme with the same description and level already exists')
    }
    const theme = await this.themesRepository.create(dsc_theme, level_id)

    return theme
  }
}

export default CreateThemeService