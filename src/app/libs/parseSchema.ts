import { type ZodSchema, z } from 'zod';

type ParseResult<T> =
  | { success: true; data: T }
  | { success: false; data: { statusCode: number; message: unknown } };

export function parseSchema<T>(
  schema: ZodSchema<T>,
  data: unknown,
): ParseResult<T> {
  const result = schema.safeParse(data);

  if (result.success) {
    return {
      success: true,
      data: result.data,
    };
  }

  const formattedErrors = result.error.errors.map((err) => {
    const path = err.path.join('.');
    return path ? `${path}: ${err.message}` : err.message;
  });

  return {
    success: false,
    data: {
      statusCode: 422,
      message: formattedErrors,
    },
  };
}
