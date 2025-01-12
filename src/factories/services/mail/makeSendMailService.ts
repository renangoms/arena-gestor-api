import { SendMailService } from '../../../app/modules/mail/services/send/Send.service';

export function makeSendMailService() {
  return new SendMailService();
}
