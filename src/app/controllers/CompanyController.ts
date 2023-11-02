import { Request, Response, Router } from "express";
import CompanyRepository from "../repositories/CompanyRepository"

const companyRouter = Router();

companyRouter.get("/", async (_req: Request, res: Response) => {
    try {
        const companies = await CompanyRepository.getCompanies();
        res.status(200).json(companies);
    } catch (error) {
        console.error("Erro ao listar as empresas:", error);
        res.status(500).json({ error: "Erro ao listar as empresas." });
    }
});

companyRouter.post('/', async (req: Request, res: Response) => {
    try {

        const newCompany = await CompanyRepository.createCompany(req.body);

        res.status(201).json(newCompany);

    } catch (error) {
        console.error('Erro ao criar uma nova empresa:', error);
        res.status(500).json({ error: 'Erro ao criar uma nova empresa.' });
    }
})

companyRouter.get('/:cnpj', async (req: Request, res: Response) => {
    try {
        const company = await CompanyRepository.getCompanyByCnpj(req.params.cnpj);

        if (company) {
            res.status(200).json(company);
        } else {
            res.status(404).json({ error: 'Empresa não encontrada.' });
        }
    } catch (error) {
        console.error('Erro ao listar a empresa:', error);
        res.status(500).json({ error: 'Erro ao listar a empresa.' });
    }
});

companyRouter.put('/:cnpj', async (req: Request, res: Response) => {
    try {
        const updatedCompany = await CompanyRepository.updateCompanyByCnpj(req.params.cnpj, req.body);

        if (updatedCompany.affected) {
            res.status(200).json({ message: 'Empresa atualizada com sucesso.' });
        } else {
            res.status(404).json({ error: 'Empresa não encontrada.' });
        }
    } catch (error) {
        console.error('Erro ao atualizar a empresa:', error);
        res.status(500).json({ error: 'Erro ao atualizar a empresa.' });
    }
});

companyRouter.delete('/:cnpj', async (req: Request, res: Response) => {
    const cnpj = req.params.cnpj;

    try {
        const deletedCompany = await CompanyRepository.deleteCompanyByCnpj(cnpj);

        if (deletedCompany) {
            res.status(200).json({ message: 'Empresa excluída com sucesso' });
        } else {
            res.status(404).json({ error: 'Empresa não encontrada.' });
        }
    } catch (error) {
        console.error('Erro ao excluir a empresa:', error);
        res.status(500).json({ error: 'Erro ao excluir a empresa.' });
    }
});



export default companyRouter;