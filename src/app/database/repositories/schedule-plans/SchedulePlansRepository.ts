import type { SchedulePlan } from '../../../entities/SchedulePlan';
import { prismaClient } from '../../../libs/prismaClient';

import type {
  CreateDto,
  FindByDateDto,
  ISchedulePlansRepository,
} from './SchedulePlansRepository.types';

export class SchedulePlansRepository implements ISchedulePlansRepository {
  findAll(): Promise<SchedulePlan[]> {
    return prismaClient.schedulePlan.findMany();
  }

  findByDate({ startDate, endDate }: FindByDateDto): Promise<SchedulePlan[]> {
    return prismaClient.schedulePlan.findMany({
      where: {
        startDate: {
          lte: endDate,
        },
        endDate: {
          gte: startDate,
        },
      },
    });
  }

  create({ name, startDate, endDate }: CreateDto): Promise<SchedulePlan> {
    return prismaClient.schedulePlan.create({
      data: {
        name,
        startDate,
        endDate,
      },
    });
  }
}
