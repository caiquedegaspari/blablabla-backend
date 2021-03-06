import {injectable, inject} from 'tsyringe'

import AppError from '@shared/errors/AppError'
import IThemesRepository from '@modules/themes/repositories/IThemesRepository'
import Theme from '../infra/typeorm/entities/Theme'

@injectable()
class ListThemesByLevelService {

  constructor( @inject('ThemesRepository')
  private themesRepository: IThemesRepository,
  ) { }

  public async execute(level_id: string): Promise<Theme[]>{
     
    const themes = await this.themesRepository.findThemesByLevelId(level_id)
    
    if(!themes){
      throw new AppError('Themes not found')
    }
    

    return themes
  }
}

export default ListThemesByLevelService