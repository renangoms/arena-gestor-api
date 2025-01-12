import { ZodError, z } from 'zod';
import { parseSchema } from '../../../../libs/parseSchema';
import type { IController } from '../../../../types/IController';
import type { IRequest } from '../../../../types/IRequest';
import type { IResponse } from '../../../../types/IResponse';
import type { IResetPasswordService } from '../../services/reset-password/ResetPassword.types';

const schema = z.object({
  newPassword: z.string().min(8),
});

export class ResetPasswordController implements IController {
  constructor(private readonly resetPasswordService: IResetPasswordService) {}

  async handle(request: IRequest): Promise<IResponse> {
    try {
      const parsedBody = parseSchema(schema, request.body);

      if (!parsedBody.success) {
        return {
          body: { error: parsedBody.data.message },
          statusCode: parsedBody.data.statusCode,
        };
      }

      if (!request.account?.id) {
        return {
          body: { error: 'User ID is required.' },
          statusCode: 400,
        };
      }

      await this.resetPasswordService.execute({
        userId: request.account?.id,
        ...parsedBody.data,
      });

      return {
        statusCode: 200,
        body: { message: 'Password reset successfully!' },
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
