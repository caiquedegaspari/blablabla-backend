import Level from '../infra/typeorm/entities/Level'

export default interface ILevelsRepository {
  findLevels(): Promise<Level[] | undefined>
  findLevelById(idLevel: string): Promise<Level | undefined>
  findLevelByDescription(dscLevel: string): Promise<Level | undefined>
  create(dscLevel: string):Promise<Level>
}