import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: '127.0.0.1',
  port: 5432,
  username: 'postgres',
  password: '2qordjr10@',
  database: 'dev-blog',
  entities: ['dist/**/*.entity{ .ts,.js}'],
  synchronize: true,
  logging: true,
};
