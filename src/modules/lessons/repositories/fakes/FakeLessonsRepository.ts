
import { v4 as uuidv4 } from 'uuid';

import Lesson from '@modules/lessons/infra/typeorm/entities/Lesson';
import ILessonsRepository from '@modules/lessons/repositories/ILessonsRepository'

import ICreateLessonDTO from '@modules/lessons/dtos/ICreateLessonDTO'

class FakeLessonsRepository implements ILessonsRepository {
  
    
  private lessons: Lesson[] = [] 
  public async findLessons(): Promise<Lesson[] | undefined> {
    return this.lessons
  }
  public async findLessonById(lesson_id: string): Promise<Lesson | undefined> {
    const lesson = this.lessons.find(lesson => lesson.id === lesson_id);

    return lesson
  }
  public async findLessonsForTheme(level_id: string, theme_id: string): Promise<Lesson[] | undefined> {
    
    const lesson = this.lessons.filter(lesson => 
                                      lesson.level_id === level_id &&
                                      lesson.theme_id === theme_id );

    return lesson
  }
 public async create({text_array, audio_array, level_id, theme_id}: ICreateLessonDTO): Promise<Lesson> {
  
    const lesson = new Lesson()
    
    Object.assign(lesson, {id: uuidv4() , text_array, audio_array, level_id, theme_id})

    this.lessons.push(lesson)
    console.log(lesson)
    return lesson;
  }

}

export default FakeLessonsRepository