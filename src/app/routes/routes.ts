import {Router} from "express";
import CompanyController from "../controllers/CompanyController";

const routers = Router();

routers.use("/companies", CompanyController);

export default routers;