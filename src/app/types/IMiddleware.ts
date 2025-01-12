import type { IRequest } from './IRequest';
import type { IResponse } from './IResponse';

export interface IData {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  data: Record<string, any>;
}

export interface IMiddleware {
  handle(request: IRequest): Promise<IResponse | IData>;
}
