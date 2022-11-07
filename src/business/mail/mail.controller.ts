import { MailerService } from '@nestjs-modules/mailer';
import { Controller, Get, Query } from '@nestjs/common';
import { ApiQuery, ApiTags } from '@nestjs/swagger';

@Controller('mail')
export class mailController {
  constructor(private mailService: MailerService) {}

  @ApiTags('mail')
  @ApiQuery({
    description: '메일주소',
    example: '',
    name: 'toemail',
  })
  @Get('plain-text-email')
  async plainTextEmail(@Query('toemail') toemail: string) {
    console.log(toemail);
    await this.mailService.sendMail({
      to: toemail,
      from: 'minjae2246@ubcare.co.kr',
      subject: 'simple',
      text: 'welcome',
    });
    return 'suc';
  }
}
