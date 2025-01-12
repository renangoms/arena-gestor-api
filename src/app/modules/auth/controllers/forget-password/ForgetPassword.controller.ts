import { ZodError, z } from 'zod';
import { InvalidCredentials } from '../../../../errors/InvalidCredentials';
import { parseSchema } from '../../../../libs/parseSchema';
import type { IController } from '../../../../types/IController';
import type { IRequest } from '../../../../types/IRequest';
import type { IResponse } from '../../../../types/IResponse';
import type { IForgetPasswordService } from '../../services/forget-password/ForgetPasswordService.types';

const schema = z.object({
  email: z.string().email().min(1),
});

export class ForgetPasswordController implements IController {
  constructor(private readonly forgetPasswordService: IForgetPasswordService) {}

  async handle(request: IRequest): Promise<IResponse> {
    try {
      const parsedBody = parseSchema(schema, request.body);

      if (!parsedBody.success) {
        return {
          body: { error: parsedBody.data.message },
          statusCode: parsedBody.data.statusCode,
        };
      }

      await this.forgetPasswordService.execute(parsedBody.data);

      return {
        statusCode: 200,
        body: { message: 'If the email exists, a reset link has been sent.' },
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
