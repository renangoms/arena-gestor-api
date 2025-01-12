export interface IForgetPasswordInputType {
  email: string;
}

export interface IForgetPasswordService {
  execute(input: IForgetPasswordInputType): Promise<void>;
}
