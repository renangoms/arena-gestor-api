import type { Request, Response } from 'express';
import type { IController } from '../../app/types/IController';

// Currying
export function routeAdapter(controller: IController) {
  return async (request: Request, response: Response) => {
    const { statusCode, body } = await controller.handle({
      body: request.body,
      params: request.params,
      headers: request.headers as Record<string, string>,
      account: request.metadata?.account,
    });

    response.status(statusCode).json(body);
  };
}
