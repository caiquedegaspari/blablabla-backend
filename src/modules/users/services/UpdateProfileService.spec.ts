import AppError from '@shared/errors/AppError';

import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider'
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import UpdateProfileService from './UpdateProfileService';

let fakeUsersRepository:FakeUsersRepository
let fakeHashProvider:FakeHashProvider
let updateProfile:UpdateProfileService

describe('UpdateProfile', () => {
  beforeEach(() => {
     fakeUsersRepository = new FakeUsersRepository()
     fakeHashProvider = new FakeHashProvider()
     updateProfile = new UpdateProfileService(fakeUsersRepository, fakeHashProvider)
  })
    it('should be able to update the Profile', async () => {
           
    const user =  await fakeUsersRepository.create({
        name: 'John Doe',
        email: 'johndie@example.com',
        password: '123456'
      })

     const updatedUser = await updateProfile.execute({
        user_id: user.id,
        name: 'Jhon',
        email: 'John@example.com'
      })
      
      expect(updatedUser.name).toBe('Jhon');
      expect(updatedUser.email).toBe('John@example.com');
      
    }) 

    it('should be able to update the Profile from non-existing user', async () => {
           
      expect(updateProfile.execute({
        user_id: 'non-existing-user-id',
        name: 'John Doe',
        email: 'johndie@example.com'
      })
      ).rejects.toBeInstanceOf(AppError)
      
      
    }) 

    it('should not be able to chance to another user email', async () => {
           
      await fakeUsersRepository.create({
          name: 'John Doe',
          email: 'johndie@example.com',
          password: '123456'
        })

     const user = await fakeUsersRepository.create({
          name: 'Test',
          email: 'test@example.com',
          password: '123456'
        })
  
  
        await expect(updateProfile.execute({
          user_id: user.id,
          name: 'Jhon',
          email: 'johndie@example.com'
        })
        ).rejects.toBeInstanceOf(AppError)
               
      }) 
      
      it('should be able to update the password', async () => {
           
        const user =  await fakeUsersRepository.create({
            name: 'John Doe',
            email: 'johndie@example.com',
            password: '123456'
          })
    
         const updatedUser = await updateProfile.execute({
            user_id: user.id,
            name: 'Jhon',
            email: 'John@example.com',
            old_password: '123456',
            password: '123123'
          })
          
          expect(updatedUser.password).toBe('123123');
          
          
        }) 

        it('should not be able to update the password without old password', async () => {
           
          const user =  await fakeUsersRepository.create({
              name: 'John Doe',
              email: 'johndie@example.com',
              password: '123456'
            })
      
          await expect(updateProfile.execute({
              user_id: user.id,
              name: 'Jhon',
              email: 'John@example.com',
              password: '123123'
            })
           ).rejects.toBeInstanceOf(AppError)
            
            //expect(updatedUser.password).toBe('123123');
            
            
          }) 

          it('should not be able to update the password with wrong old password', async () => {
           
            const user =  await fakeUsersRepository.create({
                name: 'John Doe',
                email: 'johndie@example.com',
                password: '123456'
              })
        
            await expect(updateProfile.execute({
                user_id: user.id,
                name: 'Jhon',
                email: 'John@example.com',
                old_password: 'wrong-old-password',
                password: '123123'
              })
             ).rejects.toBeInstanceOf(AppError)
              
              //expect(updatedUser.password).toBe('123123');
              
              
            }) 
  
})