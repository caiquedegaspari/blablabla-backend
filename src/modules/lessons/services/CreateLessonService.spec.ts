
import AppError from '@shared/errors/AppError'
import FakeLessonsRepository from '../repositories/fakes/FakeLessonsRepository'
import CreateLessonService from './CreateLessonService'

let fakeLessonsRepository: FakeLessonsRepository
let createLesson: CreateLessonService

describe('CreateAudio', () => {

  beforeEach(() =>{
    fakeLessonsRepository = new FakeLessonsRepository()
    createLesson = new CreateLessonService(fakeLessonsRepository)
  })

  it('should be able to create a new lesson', async () => {

    const lesson = await createLesson.execute({
     text_array: ['Hello!', 'Bye!'],
     audio_array: ['url1', 'url2'],
     level_id: 'levei-id',
     theme_id: 'theme-id'
    })

    expect(lesson).toHaveProperty('id')

  })

})