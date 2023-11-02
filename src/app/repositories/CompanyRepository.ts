import Company from "../entities/Company";
import ICompany from "../interfaces/ICompany";
import { AppDataSource } from "../../database/data-source";

const companyRepository = AppDataSource.getRepository(Company);

const getCompanies = (): Promise<ICompany[]> => {
    return companyRepository.find();
}

const createCompany = (company: ICompany): Promise<ICompany> => {
    return companyRepository.save(company);
}

const getCompanyByCnpj = (cnpj: string): Promise<ICompany | null> => {
    return companyRepository.findOne({ where: { cnpj } });
}

const updateCompanyByCnpj = (cnpj: string, updatedData: ICompany) => {
    return companyRepository.update({ cnpj }, updatedData);
}

const deleteCompanyByCnpj = (cnpj: string) => {
    return companyRepository.delete({ cnpj });

}

export default { getCompanies, createCompany, getCompanyByCnpj, updateCompanyByCnpj, deleteCompanyByCnpj }