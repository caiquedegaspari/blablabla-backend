
import { v4 as uuidv4 } from 'uuid';

import Theme from '@modules/themes/infra/typeorm/entities/Theme';
import IThemesRepository from '@modules/themes/repositories/IThemesRepository'
import AppError from '@shared/errors/AppError';

class FakeThemesRepository implements IThemesRepository {
  private themes: Theme[] = [] 
  
 public async findThemesByLevelId(level_id: string): Promise<Theme[]> {
  
      const themesByLevel =  this.themes.filter(theme => theme.level_id === level_id);

      if(!themesByLevel){
          throw new AppError('theme not found')
      }
      
      return themesByLevel
  }

 public async findThemeByDescription(dsc_themee: string, level_id: string): Promise<Theme | undefined> {
  const themes = this.themes.find(theme => theme.level_id === level_id && theme.dsc_theme === dsc_themee);

  return themes
  }

      
 public async findThemes(): Promise<Theme[] | undefined> {

        return this.themes;
  
  }

 public async create(dsc_theme: string, level_id: string): Promise<Theme> {
  
    const theme = new Theme()
    
    Object.assign(theme, {id: uuidv4() , dsc_theme, level_id})

    this.themes.push(theme)
    console.log(theme)
    return theme;
  }

}

export default FakeThemesRepository