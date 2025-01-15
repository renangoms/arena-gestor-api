import type { Schedule } from '../../../../entities/Schedule';

export interface IListSchedulesInputType {
  schedulePlanId: string;
}

export type IListSchedulesOutputType = Schedule[];

export interface IListSchedulesService {
  execute(input: IListSchedulesInputType): Promise<IListSchedulesOutputType>;
}
