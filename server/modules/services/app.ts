import { IApp } from '../../interfaces/app';
import { App } from '../../models/app';
import * as appRepository from '../repositories/app';

export async function save(model: IApp): Promise<App> {
  return await appRepository.insert(model);
}
