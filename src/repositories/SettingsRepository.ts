import { Repository, EntityRepository } from 'typeorm';
import { Setting } from '../entities/setting';

@EntityRepository(Setting)
class SettingsReposytory extends Repository<Setting>{}

export { SettingsReposytory };