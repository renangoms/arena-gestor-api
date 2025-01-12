import type { NextFunction, Request, Response } from 'express';
import type { IMiddleware } from '../../app/types/IMiddleware';

export function middlewareAdapter(middleware: IMiddleware) {
  return async (request: Request, response: Response, next: NextFunction) => {
    const result = await middleware.handle({
      body: request.body,
      params: request.params,
      headers: request.headers as Record<string, string>,
      account: request.metadata?.account,
    });

    if ('statusCode' in result) {
      return response.status(result.statusCode).json(result.body);
    }

    request.metadata = {
      ...request.metadata,
      ...result.data,
    };

    next();
  };
}
