import { IntersectionType, OmitType, PickType } from '@nestjs/swagger';
import { UserEntity } from 'src/entities/User.entity';

export class OutGetUserDto extends OmitType(UserEntity, [
  'createDate',
  'updateDate',
]) {}

export class InsertUBcareUserDto extends PickType(UserEntity, [
  'employeeNumber',
  'teamType',
]) {}
