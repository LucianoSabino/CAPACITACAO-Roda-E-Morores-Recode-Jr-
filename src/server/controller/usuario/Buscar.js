import { StatusCodes } from "http-status-codes";
import * as yup from "yup";
import { validation } from "../../shared/middlewares/Validation.js";
import { UsuarioProvider } from "../../providers/usuario/index.js";

export const createValidation = validation((getSchema) => ({
  body: getSchema(
    yup.object().shape({
      id: yup.string().optional(),
      nome: yup.string().optional(),
      cpf: yup.string().optional(),
    })
  ),
}));
