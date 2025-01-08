export interface IRequest {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  body: Record<string, any>;
  params: Record<string, string>;
  headers: Record<string, string>;
  account?: {
    id: string;
    role: string;
  };
}
