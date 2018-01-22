import { IApp } from '../interfaces/app';
import { Model } from 'objection';

export class App extends Model implements IApp {
  public id?: number;
  public name: string;
  public developerCompany: string;
  public rating: string;
  public icon: string;
  public value: string;
  public bundleId: string;
  public categoryName: string;

  static get tableName(): string {
    return 'App';
  }
}
