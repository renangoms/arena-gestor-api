import type { DayOfWeek, Schedule } from '../../../../entities/Schedule';

interface ICreateSchedule {
  schedulePlanId: string;
  dayOfWeek: DayOfWeek;
  startTime: number;
  endTime: number;
}

export interface ICreateSchedulesInputType extends Array<ICreateSchedule> {}

export interface ICreateSchedulesService {
  execute(input: ICreateSchedulesInputType): Promise<Schedule[]>;
}
