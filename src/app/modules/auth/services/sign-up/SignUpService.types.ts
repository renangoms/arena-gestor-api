export interface ISignUpInputType {
  name: string;
  email: string;
  phone: string;
  password: string;
}

export interface ISignUpOutputType {
  accessToken: string;
}

export interface ISignUpService {
  execute(input: ISignUpInputType): Promise<ISignUpOutputType>;
}
