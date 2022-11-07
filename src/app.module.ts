import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './api/user/user.module';
import { MailModule } from './business/mail/mail.module';
import { config } from './config/ormconfig';

@Module({
  imports: [TypeOrmModule.forRoot(config), UserModule, MailModule],
  controllers: [],
})
export class AppModule {}
