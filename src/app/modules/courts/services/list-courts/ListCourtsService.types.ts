import type { Court } from '../../../../entities/Court';

export type IListCourtsOutputType = Court[];

export interface IListCourtsService {
  execute(): Promise<IListCourtsOutputType>;
}
