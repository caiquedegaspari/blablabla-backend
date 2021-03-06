import {Request, Response } from 'express';
import {container} from 'tsyringe'
import { classToClass} from 'class-transformer'
import CreateTextService from '@modules/texts/services/CreateTextService'
import ListTextService from '@modules/texts/services/ListTextService'

export default class TextsController{
  public async create(request: Request, response: Response): Promise<Response>{
    try {
      console.log(request.body)
      const { dsc_text } = request.body;

      const createText = container.resolve(CreateTextService)

      const text = await createText.execute(dsc_text)

      return response.json(classToClass(text));
    } catch (err) {
      return response.status(400).json({ error: err.message})
    }
  }
  
  public async index(request: Request, response: Response): Promise<Response>{
    
    try{
    const listTexts = container.resolve(ListTextService)

    const texts = await listTexts.execute()

    return response.json(classToClass(texts));
    } catch (err) {
      return response.status(400).json({ error: err.message})
    }
  }
  
}