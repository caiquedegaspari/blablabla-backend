import Theme from '../infra/typeorm/entities/Theme'

export default interface IThemesRepository {
  findThemes(): Promise<Theme[] | undefined>
  findThemesByLevelId(level_id: string): Promise<Theme[] | undefined>
  findThemeByDescription(dsc_theme: string, level_id: string): Promise<Theme | undefined>
  create(dsc_theme: string, level_id: string): Promise<Theme>
}