import {injectable, inject} from 'tsyringe'

import AppError from '@shared/errors/AppError'
import ILevelsRepository from '@modules/levels/repositories/ILevelsRepository'
import Level from '../infra/typeorm/entities/Level'

@injectable()
class CreateLevelService {

  constructor( @inject('LevelsRepository')
  private levelsRepository: ILevelsRepository,
  ) { }

  public async execute(dscLevel: string): Promise<Level>{
     
    const levelExists = await this.levelsRepository.findLevelByDescription(dscLevel)
    console.log(dscLevel)
    if(levelExists){
      throw new AppError('A level with the same description already exists')
    }
    const level = await this.levelsRepository.create(dscLevel)

    return level
  }
}

export default CreateLevelService