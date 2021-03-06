
import AppError from '@shared/errors/AppError'
import FakeAudiosRepository from '../repositories/fakes/FakeAudiosRepository'
import CreateAudioService from './CreateAudioService'

let fakeAudiosRepository: FakeAudiosRepository
let createAudio: CreateAudioService

describe('CreateAudio', () => {

  beforeEach(() =>{
    fakeAudiosRepository = new FakeAudiosRepository()
      createAudio = new CreateAudioService(fakeAudiosRepository)
  })

  it('should be able to create a new audio', async () => {

    const audio = await createAudio.execute('Add audio test', 'audio url')

    expect(audio).toHaveProperty('id')

  })

  it('should not be able to create level with same url',async () => {

    await createAudio.execute('Add audio test', 'audio url')

    await expect( createAudio.execute(
      'Add audio test', 'audio url'
      )).rejects.toBeInstanceOf(AppError)

  })
})