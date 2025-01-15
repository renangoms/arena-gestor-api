import type { ISchedulePlansRepository } from '../../../../database/repositories/schedule-plans/SchedulePlansRepository.types';
import type { SchedulePlan } from '../../../../entities/SchedulePlan';
import type { IListSchedulePlansService } from './ListSchedulePlansService.types';

export class ListSchedulePlansService implements IListSchedulePlansService {
  constructor(
    private readonly schedulePlansRepository: ISchedulePlansRepository,
  ) {}

  execute(): Promise<SchedulePlan[]> {
    return this.schedulePlansRepository.findAll();
  }
}
