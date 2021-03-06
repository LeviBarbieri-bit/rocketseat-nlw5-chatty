import { getCustomRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository";


interface IusersCreate {
    email: string
}

class UsersService {

    private usersRepository: Repository<User>

    constructor() {
        this.usersRepository = getCustomRepository(UsersRepository);
    }

    async create({email} : IusersCreate) {
               
        const userAlreadyExists = await this.usersRepository.findOne({
            email
        })

        if(userAlreadyExists) {
            return userAlreadyExists;
        }

        const user = this.usersRepository.create({
            email,
        })
        
        await this.usersRepository.save(user);
    
        return user;
    }

    async findByEmail(email: string) {  
        return await this.usersRepository.findOne({where: {email}});        
    } 

}

export { UsersService };