import { request ,response, Router } from "express";
import { getCustomRepository } from "typeorm";
import { SettingsControlller } from "./controllers/SettingsController";
import { SettingsReposytory } from "./repositories/SettingsRepository";

const routes = Router();

const settingsController = new SettingsControlller();

routes.post("/settings", settingsController.create)

export { routes };