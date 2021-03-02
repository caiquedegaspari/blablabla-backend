import { getRepository,Repository } from "typeorm";
import ILevelsRepository from "@modules/levels/repositories/ILevelsRepository";

import Level from "../entities/Level";


class LevelsRepository implements ILevelsRepository {


  private ormRepository: Repository<Level>
  constructor(){
    this.ormRepository = getRepository(Level)
  }

  public async findLevels(): Promise<Level[] | undefined> {
    const levels = await this.ormRepository.find();

    return levels
  }
  public async findLevelById(id: string): Promise<Level | undefined> { 

    const level = await this.ormRepository.findOne(id);

    return level
  }
  public async findLevelByDescription(dsc_level: string): Promise<Level | undefined> {
    const level = await this.ormRepository.findOne({
      dsc_level
    });

    return level
  }
  public async create(dsc_level: string): Promise<Level> {
    const level = this.ormRepository.create({dsc_level})

    await this.ormRepository.save(level)

    return level
  }
}

export default LevelsRepository