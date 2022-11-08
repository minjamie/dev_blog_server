import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserEntity } from './User.entity';

@Entity('Team')
export class TeamEntity {
  @PrimaryGeneratedColumn({ name: 'ID' })
  id: number;

  @Column({ name: 'USER_EMPLOYEE_NUMBER' })
  userEmployeeNumber: number;

  @Column({ name: 'TEAM_NAME' })
  name: number;

  @OneToOne(() => UserEntity, (user) => user.team)
  @JoinColumn({ name: 'USER_EMPLOYEE_NUMBER' })
  user: UserEntity;
}
