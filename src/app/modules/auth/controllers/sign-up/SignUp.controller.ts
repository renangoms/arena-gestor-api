import { ZodError, z } from 'zod';
import { AccountAlreadyExists } from '../../../../errors/AccountAlreadyExists';
import { parseSchema } from '../../../../libs/parseSchema';
import type { IController } from '../../../../types/IController';
import type { IRequest } from '../../../../types/IRequest';
import type { IResponse } from '../../../../types/IResponse';
import type { ISignInService } from '../../services/sign-in/SignInService.types';

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email().min(1),
  phone: z.string().min(8),
  password: z.string().min(8),
});

export class SignUpController implements IController {
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
        statusCode: 201,
        body: { accessToken },
      };
    } catch (error) {
      if (error instanceof ZodError) {
        return {
          statusCode: 400,
          body: error.issues,
        };
      }

      if (error instanceof AccountAlreadyExists) {
        return {
          statusCode: 409,
          body: {
            error: 'This e-mail already in use.',
          },
        };
      }

      throw error;
    }
  }
}
