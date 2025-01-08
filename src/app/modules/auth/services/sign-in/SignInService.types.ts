export interface ISignInInputType {
  email: string;
  password: string;
}

export interface ISignInOutputType {
  accessToken: string;
}

export interface ISignInService {
  execute(input: ISignInInputType): Promise<ISignInOutputType>;
}
