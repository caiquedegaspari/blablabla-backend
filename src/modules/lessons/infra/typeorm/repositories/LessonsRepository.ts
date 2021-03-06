import { getRepository,Repository } from "typeorm";
import ILessonsRepository from "@modules/lessons/repositories/ILessonsRepository";

import Lesson from "../entities/Lesson";
import ICreateLessonDTO from '@modules/lessons/dtos/ICreateLessonDTO'

class LessonsRepository implements ILessonsRepository {


  private ormRepository: Repository<Lesson>
  constructor(){
    this.ormRepository = getRepository(Lesson)
  }
  public async findLessons(): Promise<Lesson[] | undefined> {
    const lessons = await this.ormRepository.find();

    return lessons
  }
  public async  findLessonById(id: string): Promise<Lesson | undefined> {
    const lesson = await this.ormRepository.findOne(id);

    return lesson
  }
  public async findLessonsForTheme(level_id: string, theme_id: string): Promise<Lesson[]| undefined> {
  
    const lessons = await this.ormRepository.find({level_id, theme_id});

    return lessons
  }

  public async create({text_array, audio_array, level_id, theme_id}: ICreateLessonDTO): Promise<Lesson> {
    
    const lesson = this.ormRepository.create({text_array, audio_array, level_id, theme_id})

    await this.ormRepository.save(lesson)

    return lesson
  }
}

export default LessonsRepository