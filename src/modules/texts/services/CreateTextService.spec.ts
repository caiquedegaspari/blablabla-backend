
import AppError from '@shared/errors/AppError'
import FakTextsRepository from '../repositories/fakes/FakeTextsRepository'
import CreatTextService from './CreateTextService'

let fakTextsRepository: FakTextsRepository
let creatText: CreatTextService

describe('CreateText', () => {

  beforeEach(() =>{
    fakTextsRepository = new FakTextsRepository()
      creatText = new CreatTextService(fakTextsRepository)
  })

  it('should be able to create a new audio', async () => {

    const audio = await creatText.execute('Add audio test')

    expect(audio).toHaveProperty('id')

  })

  it('should not be able to create level with same description',async () => {

    await creatText.execute('Add audio test')

    await expect( creatText.execute(
      'Add audio test'
      )).rejects.toBeInstanceOf(AppError)

  })
})