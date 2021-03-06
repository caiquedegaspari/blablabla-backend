
import { v4 as uuidv4 } from 'uuid';

import Audio from '@modules/audios/infra/typeorm/entities/Audio';
import IAudiosRepository from '@modules/audios/repositories/IAudiosRepository'

class FakeLevelsRepository implements IAudiosRepository {
    
  private audios: Audio[] = [] 
  public async findAudios(): Promise<Audio[] | undefined> {
    return this.audios
  }
  public async findAudioById(idAudio: string): Promise<Audio | undefined> {
    const audio = this.audios.find(audio => audio.id === idAudio);

    return audio
  }
  public async findAudioByUrl(audio_url: string): Promise<Audio | undefined> {
    const audio = this.audios.find(audio => audio.audio_url === audio_url);

    return audio
  } 
 public async create(dsc_audio: string, audio_url: string): Promise<Audio> {
  
    const audio = new Audio()
    
    Object.assign(audio, {id: uuidv4() , dsc_audio, audio_url})

    this.audios.push(audio)

    return audio;
  }

}

export default FakeLevelsRepository