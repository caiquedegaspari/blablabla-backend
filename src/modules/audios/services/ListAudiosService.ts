import {injectable, inject} from 'tsyringe'

import AppError from '@shared/errors/AppError'
import IAudiosRepository from '@modules/audios/repositories/IAudiosRepository'
import Audio from '../infra/typeorm/entities/Audio'

@injectable()
class ListAudiosService {

  constructor( @inject('AudiosRepository')
  private audiosRepository: IAudiosRepository,
  ) { }

  public async execute(): Promise<Audio[]>{
     
    const audioExists = await this.audiosRepository.findAudios()
    
    if(!audioExists){
      throw new AppError('Audios not found')
    }
    

    return audioExists
  }
}

export default ListAudiosService