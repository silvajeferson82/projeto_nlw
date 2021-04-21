import { Request, Response } from "express";
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

