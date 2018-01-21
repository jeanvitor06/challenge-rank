import { IApp } from '../interfaces/app';
import { Model } from 'objection';

export class App extends Model implements IApp {
  public name: string;
  public developerCompany: string;
  public rating: number;
  public icon: string;
  public value: number;
  public bundleId: string;
  public categoryName: string;

  static get tableName(): string {
    return 'App';
  }
}
