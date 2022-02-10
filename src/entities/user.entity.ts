import { Column, Entity, OneToMany } from 'typeorm';
import BaseEntity from './base.entity';

@Entity()
export default class User extends BaseEntity {
  @Column()
  isu: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  avatar_url: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  nickname: string;

  @Column({ nullable: true })
  birthdate: string;
}
