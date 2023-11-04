import Company from "../entities/Company";
import ICompany from "../interfaces/ICompany";
import { AppDataSource } from "../../database/data-source";

const companyRepository = AppDataSource.getRepository(Company);


const getCompanies = () => {
    return companyRepository.find();
}

const createCompany = (company: ICompany) => {
    return companyRepository.save(company);
}

const getCompanyByCnpj = (cnpj: number) => {
    return companyRepository.findOne({ where: { cnpj } });
}

const updateCompanyByCnpj = (cnpj: number, updatedData: ICompany) => {
    return companyRepository.update({ cnpj }, updatedData);
}

const deleteCompanyByCnpj = (cnpj: number) => {
    return companyRepository.delete({ cnpj });
}

export default { getCompanies, createCompany, getCompanyByCnpj, updateCompanyByCnpj, deleteCompanyByCnpj }