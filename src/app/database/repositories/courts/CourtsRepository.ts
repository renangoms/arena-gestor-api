import { prismaClient } from '../../../libs/prismaClient';

import type { Court } from '../../../entities/Court';
import type { ICourtsRepository } from './CourtsRepository.types';

export class CourtsRepository implements ICourtsRepository {
  listAll(): Promise<Court[]> {
    return prismaClient.court.findMany();
  }

  create(name: string): Promise<Court> {
    return prismaClient.court.create({
      data: { name },
    });
  }
}
