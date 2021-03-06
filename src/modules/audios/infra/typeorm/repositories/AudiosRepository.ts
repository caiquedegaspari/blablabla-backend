import { getRepository,Repository } from "typeorm";
import IAudiosRepository from "@modules/audios/repositories/IAudiosRepository";

import Audio from "../entities/Audio";


class AudiosRepository implements IAudiosRepository {


  private ormRepository: Repository<Audio>
  constructor(){
    this.ormRepository = getRepository(Audio)
  }
  public async findAudios(): Promise<Audio[] | undefined> {
    const audios = await this.ormRepository.find();

    return audios
  }
  public async  findAudioById(id: string): Promise<Audio | undefined> {
    const audio = await this.ormRepository.findOne(id);

    return audio
  }
  public async findAudioByUrl(audio_url: string): Promise<Audio | undefined> {
    const audio = await this.ormRepository.findOne({audio_url});

    return audio
  }

  public async create(dsc_audio: string, audio_url: string): Promise<Audio> {
    const audio = this.ormRepository.create({dsc_audio, audio_url})

    await this.ormRepository.save(audio)

    return audio
  }
}

export default AudiosRepository