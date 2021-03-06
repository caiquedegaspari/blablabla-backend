import {injectable, inject} from 'tsyringe'

import AppError from '@shared/errors/AppError'
import ITextsRepository from '@modules/texts/repositories/ITextsRepository'
import Text from '../infra/typeorm/entities/Text'

@injectable()
class CreateTextService {

  constructor( @inject('TextsRepository')
  private textsRepository: ITextsRepository,
  ) { }

  public async execute(dsc_text: string): Promise<Text>{
     
    
    const textExists = await this.textsRepository.findTextByDescription(dsc_text)
    
    if(textExists){
      throw new AppError('A text with the same url already exists')
    }
    console.log('Service', textExists)
    const text = await this.textsRepository.create(dsc_text)

    return text
  }
}

export default CreateTextService