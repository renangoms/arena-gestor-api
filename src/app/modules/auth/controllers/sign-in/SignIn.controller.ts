import { ZodError, z } from 'zod';
import { InvalidCredentials } from '../../../../errors/InvalidCredentials';
import { parseSchema } from '../../../../libs/parseSchema';
import type { IController } from '../../../../types/IController';
import type { IRequest } from '../../../../types/IRequest';
import type { IResponse } from '../../../../types/IResponse';
import type { ISignInService } from '../../services/sign-in/SignInService.types';

const schema = z.object({
  email: z.string().email().min(1),
  password: z.string().min(8),
});

export class SignInController implements IController {
  constructor(private readonly signInService: ISignInService) {}

  async handle(request: IRequest): Promise<IResponse> {
    try {
      const parsedBody = parseSchema(schema, request.body);

      if (!parsedBody.success) {
        return {
          body: { error: parsedBody.data.message },
          statusCode: parsedBody.data.statusCode,
        };
      }

      const { accessToken } = await this.signInService.execute(parsedBody.data);

      return {
        statusCode: 200,
        body: { accessToken },
      };
    } catch (error) {
      if (error instanceof ZodError) {
        return {
          statusCode: 400,
          body: error.issues,
        };
      }

      if (error instanceof InvalidCredentials) {
        return {
          statusCode: 400,
          body: {
            error: 'Invalid credentials.',
          },
        };
      }

      throw error;
    }
  }
}
