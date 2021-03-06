
import AppError from '@shared/errors/AppError'
import FakeLessonsRepository from '../repositories/fakes/FakeLessonsRepository'
import FindLessonsforTheme from './ListLessonsForThemeService'

let fakeLessonsRepository: FakeLessonsRepository
let listLessons: FindLessonsforTheme

describe('ListLessonsForTheme', () => {

  beforeEach(() =>{
    fakeLessonsRepository = new FakeLessonsRepository()
    listLessons = new FindLessonsforTheme(fakeLessonsRepository)
  })

  it('should be able to find lessons by theme and level ids', async () => {

     await fakeLessonsRepository.create({
      text_array: ['Hello!', 'Bye!'],
      audio_array: ['url1', 'url2'],
      level_id: 'level-id',
      theme_id: 'theme-id'
     })

    const lessons = await listLessons.execute('level-id', 'theme-id')

    expect(lessons[0]).toHaveProperty('id')

  })

})