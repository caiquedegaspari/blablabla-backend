
import AppError from '@shared/errors/AppError'
import FakeThemesRepository from '../repositories/fakes/FakeThemesRepository'
import ListThemesByLevelService from './ListThemesByLevelService'
let fakeThemesRepository: FakeThemesRepository
let listThemesByLevel: ListThemesByLevelService

describe('ListThemes', () => {

  beforeEach(() =>{
      fakeThemesRepository = new FakeThemesRepository()
      listThemesByLevel = new ListThemesByLevelService(fakeThemesRepository)
  })

  it('should be able to find theme', async () => {

    await fakeThemesRepository.create('Adding theme test', 'level-id')
    const themes = await listThemesByLevel.execute('level-id')

    expect(themes).toHaveProperty('id')

  })

})