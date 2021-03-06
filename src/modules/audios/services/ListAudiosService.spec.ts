
import AppError from '@shared/errors/AppError'
import FakeAudiosRepository from '../repositories/fakes/FakeAudiosRepository'
import ListAudiosService from './ListAudiosService'

let fakeAudiosRepository: FakeAudiosRepository
let listAudios: ListAudiosService

describe('ListAudios', () => {

  beforeEach(() =>{
      fakeAudiosRepository = new FakeAudiosRepository()
      listAudios = new ListAudiosService(fakeAudiosRepository)
  })

  it('should be able to find audios', async () => {

    await fakeAudiosRepository.create('Add audio test', 'audio url')
    const audios = await listAudios.execute()

    expect(audios[0]).toHaveProperty('id')

  })

})