import {injectable, inject} from 'tsyringe'

import AppError from '@shared/errors/AppError'
import ILessonsRepository from '@modules/lessons/repositories/ILessonsRepository'
import Lesson from '../infra/typeorm/entities/Lesson'

import ICreateLessonDTO from '@modules/lessons/dtos/ICreateLessonDTO'
@injectable()
class CreateLessonService {

  constructor( @inject('LessonsRepository')
  private LessonsRepository: ILessonsRepository,
  ) { }

  public async execute(lessonData: ICreateLessonDTO): Promise<Lesson>{
     
  
    const lesson = await this.LessonsRepository.create(lessonData)

    return lesson
  }
}

export default CreateLessonService