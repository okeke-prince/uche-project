import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity()
export class EmailEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ length: 100 })
    firstName: string;
  
    @Column({ length: 100 })
    lastName: string;
  
    @Column({ length: 100, unique: true })
    username: string;
  
    @Column({ length: 100, unique: true })
    email: string;
  
    @Column({ length: 255 })
    address: string;
  
    @Column({ length: 255, nullable: true })
    address2: string;
  
    @Column({ length: 100 })
    country: string;
  
    @Column({ length: 100 })
    state: string;
  
    @Column({ length: 20 })
    zip: string;
  
    @Column({ default: false })
    sameAddress: boolean;
  
    @Column({ default: false })
    saveInfo: boolean;
  
    @Column({ length: 20 })
    paymentMethod: string;
  
    @Column({ length: 100 })
    ccName: string;
  
    @Column({ length: 20 })
    ccNumber: string;
  
    @Column({ length: 7 })
    ccExpiration: string;
  
    @Column({ length: 4 })
    ccCvv: string;
  
}
