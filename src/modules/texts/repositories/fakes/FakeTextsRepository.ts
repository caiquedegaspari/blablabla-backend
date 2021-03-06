
import { v4 as uuidv4 } from 'uuid';

import Text from '@modules/texts/infra/typeorm/entities/Text';
import ITextsRepository from '@modules/texts/repositories/ITextsRepository'

class FakeTextsRepository implements ITextsRepository {
  
  private texts: Text[] = [] 
  public async findTexts(): Promise<Text[] | undefined> {
    return this.texts
  }
  public async findTextById(id: string): Promise<Text | undefined> {
    const text = this.texts.find(text => text.id === id);

    return text
  }
  public async findTextByDescription(dsc_text: string): Promise<Text | undefined> {
    const text = this.texts.find(text => text.dsc_text === dsc_text);

    return text
  }
  
 public async create(dsc_text: string): Promise<Text> {
  
    const text = new Text()
    
    Object.assign(text, {id: uuidv4() , dsc_text})

    this.texts.push(text)

    return text;
  }

}

export default FakeTextsRepository