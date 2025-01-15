import type { SchedulePlan } from '../../../entities/SchedulePlan';

export interface FindByDateDto {
  startDate: Date;
  endDate: Date;
}

export interface CreateDto {
  name: string;
  startDate: Date;
  endDate: Date;
}

export interface ISchedulePlansRepository {
  findAll(): Promise<SchedulePlan[]>;
  findByDate(findByDateDto: FindByDateDto): Promise<SchedulePlan[]>;
  create(createDto: CreateDto): Promise<SchedulePlan>;
}
