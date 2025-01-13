import type { IController } from '../../../../types/IController';
import type { IRequest } from '../../../../types/IRequest';
import type { IResponse } from '../../../../types/IResponse';
import type { IListCourtsService } from '../../services/list-courts/ListCourtsService.types';

export class ListCourtsController implements IController {
  constructor(private readonly listCourtsService: IListCourtsService) {}

  async handle(_request: IRequest): Promise<IResponse> {
    const courts = await this.listCourtsService.execute();

    return {
      statusCode: 200,
      body: { courts },
    };
  }
}
