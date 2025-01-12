import { type JwtPayload, verify } from 'jsonwebtoken';
import { env } from '../config/env';
import type { IData, IMiddleware } from '../types/IMiddleware';
import type { IRequest } from '../types/IRequest';
import type { IResponse } from '../types/IResponse';

export class AuthenticationMiddleware implements IMiddleware {
  async handle({ headers }: IRequest): Promise<IResponse | IData> {
    const { authorization } = headers;

    if (!authorization) {
      return {
        statusCode: 401,
        body: {
          error: 'Invalid access token.',
        },
      };
    }

    try {
      const [bearer, token] = authorization.split(' ');

      if (bearer !== 'Bearer') {
        throw new Error();
      }

      const payload = verify(token, env.jwtSecret) as JwtPayload;

      return {
        data: {
          account: {
            id: payload.sub,
            role: payload.role,
          },
        },
      };
    } catch {
      return {
        statusCode: 401,
        body: {
          error: 'Invalid access token.',
        },
      };
    }
  }
}
