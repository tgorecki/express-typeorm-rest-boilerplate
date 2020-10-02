import { Entity, ObjectIdColumn, ObjectID, Column, Index } from 'typeorm';
import { IsEmail, IsString } from 'class-validator';

@Entity()
export class User {
  @ObjectIdColumn()
  id?: ObjectID;

  @Column()
  @IsString()
  firstName?: string;

  @Column()
  @IsString()
  lastName?: string;

  @Column()
  @Index({ unique: true })
  @IsEmail(
    {},
    {
      message: 'Invalid email address',
    }
  )
  email?: string;

  @Column()
  @IsString()
  password?: string;

  public constructor(data?: User) {
    if (data) {
      this.firstName = data.firstName;
      this.lastName = data.lastName;
      this.email = data.email;
      this.password = data.password;
    }
  }
}
