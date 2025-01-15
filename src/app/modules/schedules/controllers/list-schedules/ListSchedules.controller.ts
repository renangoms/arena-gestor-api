import { ZodError, z } from 'zod';
import { parseSchema } from '../../../../libs/parseSchema';
import type { IController } from '../../../../types/IController';
import type { IRequest } from '../../../../types/IRequest';
import type { IResponse } from '../../../../types/IResponse';
import type { IListSchedulesService } from '../../services/list-schedules/ListSchedulesService.types';

const schema = z.object({
  schedulePlanId: z.string().uuid(),
});

export class ListSchedulesController implements IController {
  constructor(private readonly listSchedulesService: IListSchedulesService) {}

  async handle(request: IRequest): Promise<IResponse> {
    try {
      const parsedBody = parseSchema(schema, request.body);

      if (!parsedBody.success) {
        return {
          body: { error: parsedBody.data.message },
          statusCode: parsedBody.data.statusCode,
        };
      }

      const schedules = await this.listSchedulesService.execute(
        parsedBody.data,
      );

      return {
        statusCode: 200,
        body: { schedules },
      };
    } catch (error) {
      if (error instanceof ZodError) {
        return {
          statusCode: 400,
          body: error.issues,
        };
      }

      throw error;
    }
  }
}
