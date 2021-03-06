import {Request, Response } from 'express';
import {container} from 'tsyringe'
import { classToClass} from 'class-transformer'
import CreateLessonService from '@modules/lessons/services/CreateLessonService'


export default class LessonsController{
  public async create(request: Request, response: Response): Promise<Response>{
    try {
      console.log(request.body)
      
      const { text_array, audio_array, level_id, theme_id } = request.body;

      const createLesson = container.resolve(CreateLessonService)

      const lesson = await createLesson.execute({text_array, audio_array, level_id, theme_id})

      return response.json(classToClass(lesson));
    } catch (err) {
      return response.status(400).json({ error: err.message})
    }
  }
}