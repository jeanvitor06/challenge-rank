import * as appRepository from '../repositories/app';
import { scrap } from './scrap';

export async function getApps(quantityGetApps: number): Promise<void> {
  const allApps = await scrap(quantityGetApps);
  for (let apps of allApps) {
    await appRepository.insert(apps);
  }

}