import "reflect-metadata"
import { DataSource } from "typeorm"
import { CreateCompanyTable1698923347199 } from './migrations/1698923347199-CreateCompanyTable'
import Company from "../app/entities/Company"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "1234",
    database: "energizou_db",
    synchronize: true,
    logging: false,
    entities: [Company],
    migrations: [CreateCompanyTable1698923347199],
    subscribers: [],
})
