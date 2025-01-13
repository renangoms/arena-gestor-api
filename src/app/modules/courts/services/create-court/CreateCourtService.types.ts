import type { Court } from '../../../../entities/Court';

export interface ICreateCourtInputType {
  name: string;
}

export type ICreateCourtOutputType = Court;

export interface ICreateCourtService {
  execute(input: ICreateCourtInputType): Promise<ICreateCourtOutputType>;
}
