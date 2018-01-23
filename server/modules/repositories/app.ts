import { App } from '../../models/app';
import { IApp } from '../../interfaces/app';
import { Transaction } from 'objection';

export async function list(): Promise<App[]> {
  return await App.query();
}

export async function insert(model: IApp[], transaction: Transaction = null): Promise<void> {
  for (let m of model) {
    await App.query(transaction).insert(m);
  }
}

export async function findByBundleId(id: string): Promise<App> {
  return await App.query().where('bundleId', id).first();
}

export async function update(data: IApp): Promise<void> {
  await App.query().update(data).where({ bundleId: data.bundleId });
}