
import AppError from '@shared/errors/AppError'
import FakeThemesRepository from '../repositories/fakes/FakeThemesRepository'
import CreateThemeService from './CreateThemeService'

let fakeThemesRepository: FakeThemesRepository
let createTheme: CreateThemeService

describe('CreateTheme', () => {

  beforeEach(() =>{
    fakeThemesRepository = new FakeThemesRepository()
    createTheme = new CreateThemeService(fakeThemesRepository)
  })

  it('should be able to create a new theme', async () => {

    const theme = await createTheme.execute('Adding theme test', 'level id')

    expect(theme).toHaveProperty('id')

  })

  it('should not be able to create theme with same description and level',async () => {

    await createTheme.execute('Adding theme with same description', 'level id')

    await expect( createTheme.execute(
      'Adding theme with same description', 'level id'
      )).rejects.toBeInstanceOf(AppError)

  })
})