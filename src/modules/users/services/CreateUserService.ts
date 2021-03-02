import {injectable, inject} from 'tsyringe'
import User from '../infra/typeorm/entities/User';
import AppError from '@shared/errors/AppError';
import IHashProvider from '../providers/HashProvider/models/IHashProvider';

import IUsersRepository from '../repositories/IUsersRepository'
interface IRequest{
  name: string,
  email: string,
  password: string
}

@injectable()
 class CreateUserService {
  constructor(
    @inject('UsersRepository')
     private usersRepository: IUsersRepository,
     @inject('HashProvider')
     private hashProvider: IHashProvider,
    ) { }
  public async execute({name, email, password}: IRequest): Promise<User>{
      console.log('service')
      const checkUserExists= await this.usersRepository.findByEmail(email)
console.log(checkUserExists)
      if(checkUserExists){
        throw new AppError('Email address already used')
      }

      const hashedPassword = await this.hashProvider.generateHash(password)
        console.log(hashedPassword)
      const user = await this.usersRepository.create({
        name,
        email,
        password: hashedPassword
      })
      
      return user;
  }
}

export default  CreateUserService