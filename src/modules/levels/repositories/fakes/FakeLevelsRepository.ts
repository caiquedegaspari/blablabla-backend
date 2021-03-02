
import { v4 as uuidv4 } from 'uuid';

import Level from '@modules/levels/infra/typeorm/entities/Level';
import ILevelsRepository from '@modules/levels/repositories/ILevelsRepository'

class FakeLevelsRepository implements ILevelsRepository {
      private levels: Level[] = [] 
 public async findLevels(): Promise<Level[] | undefined> {

        return this.levels;
  
  }
 public async findLevelById(idLevel: string): Promise<Level | undefined> {
        const level = this.levels.find(level => level.id === idLevel)

        return level
  }
  public async findLevelByDescription(dscLevel: string): Promise<Level | undefined> {
    const level = this.levels.find(level => level.dsc_level === dscLevel)

    return level
}
 public async create(dsc_level: string): Promise<Level> {
  
    const level = new Level()
    
    Object.assign(level, {id: uuidv4() , dsc_level})

    this.levels.push(level)

    return level;
  }

}

export default FakeLevelsRepository