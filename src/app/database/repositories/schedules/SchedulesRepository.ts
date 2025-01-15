import type { Schedule } from '../../../entities/Schedule';
import { prismaClient } from '../../../libs/prismaClient';
import type {
  CreateDto,
  CreateManyDto,
  FindByPlanDto,
  ISchedulesRepository,
} from './SchedulesRepository.types';

export class SchedulesRepository implements ISchedulesRepository {
  findByPlan({ schedulePlanId }: FindByPlanDto): Promise<Schedule[]> {
    return prismaClient.schedule.findMany({
      where: {
        schedulePlanId,
      },
    });
  }

  create(createManyDto: CreateManyDto): Promise<Schedule[]> {
    return prismaClient.schedule.createManyAndReturn({
      data: createManyDto,
    });
  }
}
