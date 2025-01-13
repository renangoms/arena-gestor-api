import type { Court } from '../../../entities/Court';

export interface ICourtsRepository {
  listAll(): Promise<Court[]>;
  create(name: string): Promise<Court>;
}
