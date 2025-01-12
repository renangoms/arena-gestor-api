export interface ISendServiceInput {
  to: string;
  msg: string;
  subject: string;
  isRecoverPass: boolean;
}

export interface ISendMailService {
  execute(input: ISendServiceInput): Promise<void>;
}

export interface IGenerateRecoverPasswordTemplateHtmlParams {
  email: string;
  token: string;
}
