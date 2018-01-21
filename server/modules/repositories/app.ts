import { App } from '../../models/app';
import { IApp } from '../../interfaces/app';
import { Transaction } from 'objection';

export async function findByBundleId(id: string): Promise<App> {
  return await App.query().where('bundleId', id).first();
}
export async function list(): Promise<App[]> {
  return await App.query();
}

export async function insert(model: IApp, transaction: Transaction = null): Promise<App> {
  return await App.query(transaction).insert(model);
}

export async function update(app: IApp): Promise<App> {
  return await App.query().updateAndFetchById(app.bundleId, <App>app);
}

export async function removeAll(id: string, transaction: Transaction = null): Promise<void> {
  await App.query(transaction).delete();
}