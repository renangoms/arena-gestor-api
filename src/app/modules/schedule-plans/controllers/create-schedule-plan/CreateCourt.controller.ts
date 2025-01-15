import { ZodError, z } from 'zod';
import { DuplicateData } from '../../../../errors/DuplicateData';
import { parseSchema } from '../../../../libs/parseSchema';
import type { IController } from '../../../../types/IController';
import type { IRequest } from '../../../../types/IRequest';
import type { IResponse } from '../../../../types/IResponse';
import type { ICreateSchedulePlanService } from '../../services/create-schedule-plan/CreateSchedulePlanService.types';

const schema = z
  .object({
    name: z.string().min(1),
    startDate: z.coerce.date(),
    endDate: z.coerce.date(),
  })
  .refine((data) => data.endDate > data.startDate, {
    message: 'The end date must be later than the start date.',
    path: ['endDate'],
  });

export class CreateSchedulePlanController implements IController {
  constructor(
    private readonly createSchedulePlanService: ICreateSchedulePlanService,
  ) {}

  async handle(request: IRequest): Promise<IResponse> {
    try {
      const parsedBody = parseSchema(schema, request.body);

      if (!parsedBody.success) {
        return {
          body: { error: parsedBody.data.message },
          statusCode: parsedBody.data.statusCode,
        };
      }

      const court = await this.createSchedulePlanService.execute(
        parsedBody.data,
      );

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

      if (error instanceof DuplicateData) {
        return {
          statusCode: 409,
          body: {
            error: 'There is already another active plan for the same period.',
          },
        };
      }

      throw error;
    }
  }
}
