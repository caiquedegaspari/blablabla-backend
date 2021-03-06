import { getRepository,Repository } from "typeorm";
import IThemesRepository from "@modules/themes/repositories/IThemesRepository";

import Theme from "../entities/Theme";


class ThemesRepository implements IThemesRepository {


  private ormRepository: Repository<Theme>
  constructor(){
    this.ormRepository = getRepository(Theme)
  }
 public async findThemes(): Promise<Theme[] | undefined> {

  const themes = await this.ormRepository.find();

  return themes

  }
public async findThemesByLevelId(level_id: string): Promise<Theme[] | undefined> {
  const themes = await this.ormRepository.find({level_id});

  return themes
  }
public async findThemeByDescription(dsc_theme: string, level_id: string): Promise<Theme | undefined> {
    
  const themes = await this.ormRepository.findOne({where:{ dsc_theme, level_id}});

  return themes
  }

  public async create(dsc_theme: string, level_id: string): Promise<Theme> {
    const level = this.ormRepository.create({dsc_theme, level_id})

    await this.ormRepository.save(level)

    return level
  }
}

export default ThemesRepository