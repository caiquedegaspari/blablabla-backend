import Audio from '../infra/typeorm/entities/Audio'

export default interface ILevelsRepository {
  findAudios(): Promise<Audio[] | undefined>
  findAudioById(idAudio: string): Promise<Audio | undefined>
  findAudioByUrl(audio_url: string): Promise<Audio | undefined>
  create(audio_url: string, dsc_audio_url: string):Promise<Audio>
}