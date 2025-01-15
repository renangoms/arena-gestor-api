import type { ISchedulePlansRepository } from '../../../../database/repositories/schedule-plans/SchedulePlansRepository.types';
import { DuplicateData } from '../../../../errors/DuplicateData';
import type {
  ICreateSchedulePlanInputType,
  ICreateSchedulePlanOutputType,
  ICreateSchedulePlanService,
} from './CreateSchedulePlanService.types';

export class CreateSchedulePlanService implements ICreateSchedulePlanService {
  constructor(
    private readonly schedulePlansRepository: ISchedulePlansRepository,
  ) {}

  async execute({
    startDate,
    endDate,
    name,
  }: ICreateSchedulePlanInputType): Promise<ICreateSchedulePlanOutputType> {
    const existingPlans = await this.schedulePlansRepository.findByDate({
      startDate,
      endDate,
    });

    if (existingPlans.length > 0) {
      throw new DuplicateData();
    }

    return await this.schedulePlansRepository.create({
      name,
      startDate,
      endDate,
    });
  }
}
