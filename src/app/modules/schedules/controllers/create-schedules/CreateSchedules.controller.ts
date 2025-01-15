import { ZodError, z } from 'zod';
import { parseSchema } from '../../../../libs/parseSchema';
import type { IController } from '../../../../types/IController';
import type { IRequest } from '../../../../types/IRequest';
import type { IResponse } from '../../../../types/IResponse';
import type { ICreateSchedulesService } from '../../services/create-schedules/CreateSchedulesService.types';

const schema = z
  .array(
    z
      .object({
        schedulePlanId: z.string().uuid(),
        dayOfWeek: z.enum([
          'MONDAY',
          'TUESDAY',
          'WEDNESDAY',
          'THURSDAY',
          'FRIDAY',
          'SATURDAY',
          'SUNDAY',
        ]),
        startTime: z.number(),
        endTime: z.number(),
      })
      .refine((data) => data.endTime < 1440, {
        message: 'The maximum end time is 1440 (24-hour format).',
        path: ['endTime'],
      }),
  )
  .min(1);

export class CreateSchedulesController implements IController {
  constructor(
    private readonly createSchedulesService: ICreateSchedulesService,
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

      const schedules = await this.createSchedulesService.execute(
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
