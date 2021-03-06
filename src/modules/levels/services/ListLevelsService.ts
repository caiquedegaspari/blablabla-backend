import {injectable, inject} from 'tsyringe'

import AppError from '@shared/errors/AppError'
import ILevelsRepository from '@modules/levels/repositories/ILevelsRepository'
import Level from '../infra/typeorm/entities/Level'

@injectable()
class ListLevelsService {

  constructor( @inject('LevelsRepository')
  private levelsRepository: ILevelsRepository,
  ) { }

  public async execute(): Promise<Level[]>{
     
    const levelExists = await this.levelsRepository.findLevels()
    
    if(!levelExists){
      throw new AppError('Levels not found')
    }
    

    return levelExists
  }
}

export default ListLevelsService