import { IntersectionType, OmitType, PickType } from '@nestjs/swagger';
import { TeamEntity } from 'src/entities/Team.entity';
import { UserEntity } from 'src/entities/User.entity';

export class OutGetUserDto extends OmitType(UserEntity, [
  'createDate',
  'updateDate',
]) {}

export class InsertUBcareUserDto extends IntersectionType(
  PickType(UserEntity, ['employeeNumber']),
  PickType(TeamEntity, ['name']),
) {}
