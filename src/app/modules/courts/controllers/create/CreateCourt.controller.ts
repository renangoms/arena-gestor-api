import { ZodError, z } from 'zod';
import { parseSchema } from '../../../../libs/parseSchema';
import type { IController } from '../../../../types/IController';
import type { IRequest } from '../../../../types/IRequest';
import type { IResponse } from '../../../../types/IResponse';
import type { ICreateCourtService } from '../../services/create-court/CreateCourtService.types';

const schema = z.object({
  name: z.string().min(1),
});

export class CreateCourtController implements IController {
  constructor(private readonly createCourtService: ICreateCourtService) {}

  async handle(request: IRequest): Promise<IResponse> {
    try {
      const parsedBody = parseSchema(schema, request.body);

      if (!parsedBody.success) {
        return {
          body: { error: parsedBody.data.message },
          statusCode: parsedBody.data.statusCode,
        };
      }

      const court = await this.createCourtService.execute(parsedBody.data);

      return {
        statusCode: 200,
        body: { court },
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
