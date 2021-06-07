import { Field, ID, Int, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Project } from "./Project.entity";
import UserProfile from "./UserProfile.entity";

@ObjectType()
@Entity("users")
export default class User extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => Int)
  @Column("int", { unique: true })
  githubId: number;

  @Field()
  @Column("text", { unique: true })
  username: string;

  @Field(() => String)
  @Column({ unique: true })
  email: string;

  @Field()
  @Column("timestamptz")
  joinDate: Date;

  @Field(() => UserProfile)
  @OneToOne(() => UserProfile)
  @JoinColumn()
  profile: UserProfile;

  // TASK: Use authorized decorator so only this user can access their marketing credits
  @Field(() => Int)
  @Column("int")
  marketingCredits: number;

  @Field()
  @Column("text", { nullable: true, unique: true })
  elonicMemberId?: string;

  @Field(() => [Project])
  @OneToMany(() => Project, (project) => project.user)
  projects: Project[];
}