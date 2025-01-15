import type { DayOfWeek } from '@prisma/client';
import type { Schedule } from '../../../entities/Schedule';

export interface FindByPlanDto {
  schedulePlanId: string;
}

export interface CreateDto {
  schedulePlanId: string;
  dayOfWeek: DayOfWeek;
  startTime: number;
  endTime: number;
}

export type CreateManyDto = Array<CreateDto>;

export interface ISchedulesRepository {
  findByPlan(findByPlanDto: FindByPlanDto): Promise<Schedule[]>;
  create(createDto: CreateManyDto): Promise<Schedule[]>;
}
