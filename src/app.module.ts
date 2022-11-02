import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './api/user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'minjaekim',
      password: '2qordjr10@',
      database: 'postgres',
      synchronize: true,
      autoLoadEntities: true,
    }),
    UserModule,
  ],
  providers: [],
})
export class AppModule {}
