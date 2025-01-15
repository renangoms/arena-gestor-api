import type { SchedulePlan } from '../../../../entities/SchedulePlan';

export interface IListSchedulePlansService {
  execute(): Promise<SchedulePlan[]>;
}
