import {container} from 'tsyringe'

import '@modules/users/providers'
import './providers'

import IUsersRepository from '@modules/users/repositories/IUsersRepository'
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository'


import IUserTokensRepository from '@modules/users/repositories/IUserTokensRepository'
import UserTokensRepository from '@modules/users/infra/typeorm/repositories/UserTokensRepository'


import ILevelsRepository from '@modules/levels/repositories/ILevelsRepository'
import LevelsRepository from '@modules/levels/infra/typeorm/repositories/LevelsRepository'


import IRegionsRepository from '@modules/regions/repositories/IRegionsRepository'
import RegionsRepository from '@modules/regions/infra/typeorm/repositories/RegionsRepository'

import ICallsRepository from '@modules/calls/repositories/ICallsRepository'
import CallsRepository from '@modules/calls/infra/typeorm/repositories/CallsRepository'
   
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

     container.registerSingleton<IRegionsRepository>(
      'RegionsRepository',
      RegionsRepository
       )

       container.registerSingleton<ICallsRepository>(
        'CallsRepository',
        CallsRepository
         )
      