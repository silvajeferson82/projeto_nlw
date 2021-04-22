import { Request, Response } from "express";
import { getCustomRepository} from "typeorm";
import { SettingsReposytory } from "../repositories/SettingsRepository";



class SettingsControlller{

	async create(request: Request, response: Response){
		const { chat, username } = request.body;
       const settingsReposytory = getCustomRepository(SettingsReposytory);
       
       const settings = settingsReposytory.create({
          chat,
          username
       })

       await settingsReposytory.save(settings);

       return response.json(settings);
	}
}

export { SettingsControlller }

