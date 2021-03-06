import {injectable, inject} from 'tsyringe'

import AppError from '@shared/errors/AppError'
import ITextsRepository from '@modules/texts/repositories/ITextsRepository'
import Text from '../infra/typeorm/entities/Text'

@injectable()
class ListTextsService {

  constructor( @inject('TextsRepository')
  private textsRepository: ITextsRepository,
  ) { }

  public async execute(): Promise<Text[]>{
     
    const textExists = await this.textsRepository.findTexts()
    
    if(!textExists){
      throw new AppError('Texts not found')
    }
    

    return textExists
  }
}

export default ListTextsService