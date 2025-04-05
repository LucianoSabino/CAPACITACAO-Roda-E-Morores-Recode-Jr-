import { StatusCodes } from "http-status-codes";
import * as yup from "yup";
import { validation } from "../../shared/middlewares/Validation.js";
import { UsuarioProvider } from "../../providers/login/index.js";

export const singUpValidation = validation((getSchema) => ({
  body: getSchema(
    yup.object().shape({
      usuario: yup.string().required().min(3).max(25),
      senha: yup.string().required(),
      usuarioId: yup.string().required(),
    })
  ),
}));

export const singUp = async (req, res) => {
  const result = await UsuarioProvider.create(req.body);
  console.log(result);

  if (result instanceof Error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: {
        default: result.message,
      },
    });
  }
  res.status(StatusCodes.CREATED).json(result);
};
