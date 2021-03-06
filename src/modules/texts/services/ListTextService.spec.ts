
import AppError from '@shared/errors/AppError'
import FakeTextsRepository from '../repositories/fakes/FakeTextsRepository'
import ListTextsService from './ListTextService'

let fakeTextsRepository: FakeTextsRepository
let listTexts: ListTextsService

describe('ListTexts', () => {

  beforeEach(() =>{
      fakeTextsRepository = new FakeTextsRepository()
      listTexts = new ListTextsService(fakeTextsRepository)
  })

  it('should be able to find Texts', async () => {

    await fakeTextsRepository.create('Add text test')
    const texts = await listTexts.execute()

    expect(texts[0]).toHaveProperty('id')

  })

})