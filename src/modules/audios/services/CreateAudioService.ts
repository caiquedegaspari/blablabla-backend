import {injectable, inject} from 'tsyringe'

import AppError from '@shared/errors/AppError'
import IAudiosRepository from '@modules/audios/repositories/IAudiosRepository'
import Audio from '../infra/typeorm/entities/Audio'

@injectable()
class CreateAudioService {

  constructor( @inject('AudiosRepository')
  private audiosRepository: IAudiosRepository,
  ) { }

  public async execute(dsc_audio: string, audio_url: string): Promise<Audio>{
     
    const audioExists = await this.audiosRepository.findAudioByUrl(audio_url)
    
    if(audioExists){
      throw new AppError('A audio with the same url already exists')
    }
    const audio = await this.audiosRepository.create(dsc_audio, audio_url)

    return audio
  }
}

export default CreateAudioService