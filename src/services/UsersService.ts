import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";


interface IusersCreate {
    email: string
}

class UsersService {
    async create({email} : IusersCreate) {
       
        const usersRepository = getCustomRepository(UsersRepository)
        
        const userAlreadyExists = await usersRepository.findOne({
            email
        })

        if(userAlreadyExists) {
            return userAlreadyExists;
        }

        const user = usersRepository.create({
            email,
        })
        
        await usersRepository.save(user);
    
        return user;
    }
}

export { UsersService };