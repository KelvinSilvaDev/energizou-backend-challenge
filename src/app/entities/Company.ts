import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('company')
class Company {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('varchar')
    customerName: string;

    @Column('varchar')
    password: string;

    @Column('varchar')
    corporateName: string;

    @Column('varchar')
    cnpj: string;

    @Column('varchar')
    cep: string;

    @Column('varchar')
    address: string;

    @Column('varchar')
    number: string;

    @Column('varchar')
    phone: string;

    @Column('varchar')
    email: string;

    @CreateDateColumn()
    created_at: Date;

}

export default Company;