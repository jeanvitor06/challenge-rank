import { NextFunction, Request, Response } from 'express';
import * as appRepository from '../repositories/app';

export async function list(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const apps = await appRepository.list();
    res.status(200).send(apps);
  } catch (err) {
    next(err);
  }
}