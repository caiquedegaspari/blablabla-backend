
import AppError from '@shared/errors/AppError'
import FakeLevelsRepository from '../repositories/fakes/FakeLevelsRepository'
import ListLevelsService from './ListLevelsService'

let fakeLevelsRepository: FakeLevelsRepository
let listLevels: ListLevelsService

describe('ListLevels', () => {

  beforeEach(() =>{
      fakeLevelsRepository = new FakeLevelsRepository()
      listLevels = new ListLevelsService(fakeLevelsRepository)
  })

  it('should be able to find levels', async () => {

    await fakeLevelsRepository.create('Adding level teste')
    const levels = await listLevels.execute()

    expect(levels[0]).toHaveProperty('id')

  })

})