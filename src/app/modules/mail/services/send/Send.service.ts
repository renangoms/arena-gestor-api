import nodemailer from 'nodemailer';
import { env } from '../../../../config/env';
import type {
  IGenerateRecoverPasswordTemplateHtmlParams,
  ISendMailService,
  ISendServiceInput,
} from './SendService.types';

export class SendMailService implements ISendMailService {
  async execute(input: ISendServiceInput): Promise<void> {
    const { to, subject, msg, isRecoverPass } = input;

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: 'ti.renangomes@gmail.com',
        pass: 'rahz xdjv awpk csky',
      },
    });

    await transporter.sendMail({
      to,
      from: 'ti.renangomes@gmail.com',
      subject,
      html: isRecoverPass
        ? this.generateRecoverPasswordTemplateHtml({ email: to, token: msg })
        : msg,
    });
  }

  private generateRecoverPasswordTemplateHtml({
    email,
    token,
  }: IGenerateRecoverPasswordTemplateHtmlParams) {
    return `
      <p>Olá, ${email}.</p>
      <p>Aqui está o seu link para recuperação de senha:</p>
      <p>${env.frontEndURL}/reset-password?t=${token}</p>
      <p>(Este link expira em 5 minutos)</p>
    `;
  }
}
