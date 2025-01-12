export interface IResetPasswordInputType {
  userId: string;
  newPassword: string;
}

export interface IResetPasswordService {
  execute(input: IResetPasswordInputType): Promise<void>;
}
