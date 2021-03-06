import { getRepository,Repository } from "typeorm";
import ITextsRepository from "@modules/texts/repositories/ITextsRepository";

import Text from "../entities/Text";


class TextsRepository implements ITextsRepository {


  private ormRepository: Repository<Text>
  constructor(){
    this.ormRepository = getRepository(Text)
  }
  public async findTexts(): Promise<Text[] | undefined> {
    const texts = await this.ormRepository.find();

    return texts
  }
  public async  findTextById(id: string): Promise<Text | undefined> {
    const text = await this.ormRepository.findOne(id);

    return text
  }
  public async findTextByDescription(dsc_text: string): Promise<Text | undefined> {
    const audio = await this.ormRepository.findOne({dsc_text});

    return audio
  }

  public async create(dsc_text: string): Promise<Text> {
    const text = this.ormRepository.create({dsc_text})

    await this.ormRepository.save(text)

    return text
  }
}

export default TextsRepository