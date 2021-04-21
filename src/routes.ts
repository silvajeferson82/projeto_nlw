import { request ,response, Router } from "express";
import { getCustomRepository } from "typeorm";
import { SettingsReposytory } from "./repositories/SettingsRepository";

const routes = Router();

/**
 * Tipos de parametros
 * Routes Params -> Parametros de rotas.(http://localhost:3333/1)
 * Query Params -> Filtros e buscas.(http://localhost:3333/1?search=Busca&)
 * Body Params -> {Objeto JSON}
 */

routes.post("/settings", async (request, response) =>{
   
})

export { routes };