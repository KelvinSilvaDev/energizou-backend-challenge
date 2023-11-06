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

    const isCnpjValid = (cnpj: string): boolean => {
        if (!cnpj) {
            return false;
        }
        return true;
    }

    try {
        const { customerName, corporateName, cep, cnpj, address, number, phone, email, password } = req.body;

        if (!customerName || !corporateName || !cep || !cnpj || !email || !password) {
            return res.status(400).json({ error: 'Campos obrigatórios faltando.' });
        }

        // Validação do CNPJ
        if (!isCnpjValid(cnpj)) {
            return res.status(400).json({ error: 'CNPJ inválido.' });
        }

        // Tratamento do CEP
        const cleanedCep = cep.replace(/\D/g, ''); // Remove caracteres não numéricos

        // Verifica se o CNPJ já está cadastrado

        const companyAlreadyRegistered = await CompanyRepository.getCompanyByCnpj(cnpj);

        if (companyAlreadyRegistered) {
            return res.status(400).json({
                error: 'Empresa já cadastrada'
            });
        }

        // Crie a nova empresa
        const newCompany = await CompanyRepository.createCompany({
            customerName,
            corporateName,
            cep: cleanedCep,
            cnpj: parseInt(cnpj, 10), // Converte para número
            address,
            number,
            phone,
            email,
            password,
        });

        res.status(201).json(newCompany);

    } catch (error) {
        console.error('Erro ao criar uma nova empresa:', error);
        res.status(500).json({ error: 'Erro ao criar uma nova empresa.', message: error });
    }
})

companyRouter.get('/:cnpj', async (req: Request, res: Response) => {
    try {
        const cnpj = req.params.cnpj;
        const cnpjNumber = parseInt(cnpj);
        const company = await CompanyRepository.getCompanyByCnpj(cnpjNumber);


        if (company) {
            res.status(200).json(company);
        } else if (isNaN(cnpjNumber)) {
            res.status(400).json({ error: 'CNPJ inválido.' });
            return;
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

        const cnpj = req.params.cnpj;

        const cnpjNumber = parseInt(cnpj);

        const updatedCompany = await CompanyRepository.updateCompanyByCnpj(cnpjNumber, req.body);

        if (updatedCompany.affected) {
            res.status(204).json({ message: 'Empresa atualizada com sucesso.' });
        } else if (isNaN(cnpjNumber)) {
            res.status(400).json({ error: 'CNPJ inválido.' });
            return;
        } else {
            res.status(404).json({ error: 'Empresa não encontrada.' });
        }

    } catch (error) {
        console.error('Erro ao atualizar a empresa:', error);
        res.status(500).json({ error: 'Erro ao atualizar a empresa.' });
    }
});

companyRouter.delete('/:cnpj', async (req: Request, res: Response) => {

    try {

        const cnpj = req.params.cnpj;

        const cnpjNumber = parseInt(cnpj);

        const deletedCompany = await CompanyRepository.deleteCompanyByCnpj(cnpjNumber);

        if (deletedCompany) {
            res.status(204).json({ message: 'Empresa excluída com sucesso' });
        } else if (isNaN(cnpjNumber)) {
            res.status(400).json({ error: 'CNPJ inválido.' });
            return;
        } else {
            res.status(404).json({ error: 'Empresa não encontrada.' });
        }

    } catch (error) {
        console.error('Erro ao excluir a empresa:', error);
        res.status(500).json({ error: 'Erro ao excluir a empresa.' });
    }
});



export default companyRouter;