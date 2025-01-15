import type { SchedulePlan } from '../../../../entities/SchedulePlan';

export interface ICreateSchedulePlanInputType {
  name: string;
  startDate: Date;
  endDate: Date;
}

export type ICreateSchedulePlanOutputType = SchedulePlan;

export interface ICreateSchedulePlanService {
  execute(
    input: ICreateSchedulePlanInputType,
  ): Promise<ICreateSchedulePlanOutputType>;
}
