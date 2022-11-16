import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailService {
  constructor(private readonly mailService: MailerService) {}

  async sendMail(email: string) {
    try {
      let subject: string;
      let template: string;
      let context: any;
      subject = 'UBcare Dev-Blog 입니다. 가입신청이 완료되었습니다.';
      template = './user-auth-confirm';
      await this.mailService.sendMail({
        to: email,
        subject,
        template,
        context,
      });
    } catch (err) {
      console.log('메일 전송실패', err);
    }
  }
}
