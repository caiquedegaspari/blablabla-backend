import {Request, Response } from 'express';
import {container} from 'tsyringe'
import { classToClass} from 'class-transformer'
import CreateLevelService from '@modules/levels/services/CreateLevelService'
import ListLevelsService from '@modules/levels/services/ListLevelsService'

export default class LevelsController{
  public async create(request: Request, response: Response): Promise<Response>{
    try {
      console.log(request.body)
      const { dsc_level } = request.body;

      const createLevel = container.resolve(CreateLevelService)

      const level = await createLevel.execute(dsc_level)

      return response.json(classToClass(level));
    } catch (err) {
      return response.status(400).json({ error: err.message})
    }
  }

  public async index(request: Request, response: Response): Promise<Response>{
    
    try{
    const listLevels = container.resolve(ListLevelsService)

    const levels = await listLevels.execute()

    return response.json(classToClass(levels));
    } catch (err) {
      return response.status(400).json({ error: err.message})
    }
  }
  
}