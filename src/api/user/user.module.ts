import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { MailModule } from 'src/business/mail/mail.module';
import { UserEntity } from 'src/entities/User.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity]), AuthModule, MailModule],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
