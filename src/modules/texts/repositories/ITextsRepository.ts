import Text from '../infra/typeorm/entities/Text'

export default interface ILevelsRepository {
  findTexts(): Promise<Text[] | undefined>
  findTextById(idAudio: string): Promise<Text | undefined>
  findTextByDescription(dsc_text: string): Promise<Text | undefined>
  create(dsc_text: string):Promise<Text>
}