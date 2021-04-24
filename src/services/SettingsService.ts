import { getCustomRepository, Repository } from "typeorm";
import { Setting } from "../entities/Setting";
import { SettingsRepository } from "../repositories/SettingsRepository";


interface IsettingsCreate {
    chat: boolean,
    username: string
}

class SettingsService {

    private settingsRepository: Repository<Setting>;

    constructor() {
        this.settingsRepository = getCustomRepository(SettingsRepository)
    }

    async create({chat, username} : IsettingsCreate) {
       
           
        const userAlreadyExists = await this.settingsRepository.findOne({
            username
        })

        if(userAlreadyExists) {
            throw new Error("user already exists!");
        }

        const settings = this.settingsRepository.create({
            chat,
            username,
        })
    
        await this.settingsRepository.save(settings);
    
        return settings;
    }
}

export { SettingsService }