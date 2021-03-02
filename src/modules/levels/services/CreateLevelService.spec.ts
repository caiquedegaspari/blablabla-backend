
import AppError from '@shared/errors/AppError'
import FakeLevelsRepository from '../repositories/fakes/FakeLevelsRepository'
import CreateLevelService from './CreateLevelService'

let fakeLevelsRepository: FakeLevelsRepository
let createLevel: CreateLevelService

describe('CreateLevel', () => {

  beforeEach(() =>{
      fakeLevelsRepository = new FakeLevelsRepository()
      createLevel = new CreateLevelService(fakeLevelsRepository)
  })

  it('should be able to create a new level', async () => {

    const level = await createLevel.execute('Adding level teste')

    expect(level).toHaveProperty('id')

  })

  it('should not be able to create level with same description',async () => {

    await createLevel.execute('Adding level with same description')

    await expect( createLevel.execute(
      'Adding level with same description'
      )).rejects.toBeInstanceOf(AppError)

  })
})