import * as appRepository from '../repositories/app';
import { scrap } from './scrap';

export async function getApps(quantityGetApps: number): Promise<void> {
  const apps = await scrap(quantityGetApps);
  await appRepository.insert(apps);
}