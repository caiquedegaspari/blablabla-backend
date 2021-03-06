import {Request, Response } from 'express';
import {container} from 'tsyringe'
import { classToClass} from 'class-transformer'
import CreateAudioService from '@modules/audios/services/CreateAudioService'
import ListAudiosService from '@modules/audios/services/ListAudiosService'

export default class AudiosController{
  public async create(request: Request, response: Response): Promise<Response>{
    try {
      console.log(request.body)
      const { dsc_audio, audio_url } = request.body;

      const createAudio = container.resolve(CreateAudioService)

      const audio = await createAudio.execute(dsc_audio, audio_url)

      return response.json(classToClass(audio));
    } catch (err) {
      return response.status(400).json({ error: err.message})
    }
  }
  
  public async index(request: Request, response: Response): Promise<Response>{
    
    try{
    const listAudios = container.resolve(ListAudiosService)

    const audios = await listAudios.execute()

    return response.json(classToClass(audios));
    } catch (err) {
      return response.status(400).json({ error: err.message})
    }
  }
  
}