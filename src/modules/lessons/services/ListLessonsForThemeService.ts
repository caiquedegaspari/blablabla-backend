import {injectable, inject} from 'tsyringe'

import AppError from '@shared/errors/AppError'
import ILessonsRepository from '@modules/lessons/repositories/ILessonsRepository'
import Lesson from '../infra/typeorm/entities/Lesson'

@injectable()
class ListLessonsForThemeService {

  constructor( @inject('LessonsRepository')
  private lessonsRepository: ILessonsRepository,
  ) { }

  public async execute(level_id: string, theme_id: string): Promise<Lesson[]>{
     
    const lessonsExists = await this.lessonsRepository.findLessonsForTheme(level_id, theme_id)
    
    if(!lessonsExists){
      throw new AppError('Lessons not found')
    }
    

    return lessonsExists
  }
}

export default ListLessonsForThemeService