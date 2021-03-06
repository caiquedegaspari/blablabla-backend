import Lesson from '../infra/typeorm/entities/Lesson'
import ICreateLessonDTO from '../dtos/ICreateLessonDTO'

export default interface ILessonsRepository {
  findLessons(): Promise<Lesson[] | undefined>
  findLessonsForTheme(level_id: string, theme_id: string): Promise<Lesson[] | undefined>
  findLessonById(lesson_id: string): Promise<Lesson | undefined>
  create(lesson: ICreateLessonDTO):Promise<Lesson>
}