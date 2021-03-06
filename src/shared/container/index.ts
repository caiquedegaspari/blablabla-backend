import {container} from 'tsyringe'

import '@modules/users/providers'
import './providers'

import IUsersRepository from '@modules/users/repositories/IUsersRepository'
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository'


import IUserTokensRepository from '@modules/users/repositories/IUserTokensRepository'
import UserTokensRepository from '@modules/users/infra/typeorm/repositories/UserTokensRepository'


import ILevelsRepository from '@modules/levels/repositories/ILevelsRepository'
import LevelsRepository from '@modules/levels/infra/typeorm/repositories/LevelsRepository'
   
import IThemesRepository from '@modules/themes/repositories/IThemesRepository'
import ThemesRepository from '@modules/themes/infra/typeorm/repositories/ThemesRepository'
   

import IAudiosRepository from '@modules/audios/repositories/IAudiosRepository'
import AudiosRepository from '@modules/audios/infra/typeorm/repositories/AudiosRepository'

import ITextsRepository from '@modules/texts/repositories/ITextsRepository'
import TextsRepository from '@modules/texts/infra/typeorm/repositories/TextsRepository'
container.registerSingleton<IUsersRepository>(
  'UsersRepository',
   UsersRepository
   )

      
container.registerSingleton<IUserTokensRepository>(
  'UserTokensRepository',
  UserTokensRepository
   )

   container.registerSingleton<ILevelsRepository>(
    'LevelsRepository',
      LevelsRepository
     )
     container.registerSingleton<IThemesRepository>(
      'ThemesRepository',
      ThemesRepository
       )
       container.registerSingleton<IAudiosRepository>(
        'AudiosRepository',
        AudiosRepository
         )
         container.registerSingleton<ITextsRepository>(
          'TextsRepository',
          TextsRepository
           )