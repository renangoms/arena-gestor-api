import type { IController } from '../../../../types/IController';
import type { IRequest } from '../../../../types/IRequest';
import type { IResponse } from '../../../../types/IResponse';
import type { IListSchedulePlansService } from '../../services/list-schedule-plans/ListSchedulePlansService.types';

export class ListSchedulePlansController implements IController {
  constructor(
    private readonly listSchedulePlansService: IListSchedulePlansService,
  ) {}
  async handle(_request: IRequest): Promise<IResponse> {
    const schedulePlans = await this.listSchedulePlansService.execute();

    return {
      statusCode: 200,
      body: { schedulePlans },
    };
  }
}
