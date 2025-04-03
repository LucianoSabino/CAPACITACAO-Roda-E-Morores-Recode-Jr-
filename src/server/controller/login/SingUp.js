import { StatusCodes } from "http-status-codes";
import * as yup from "yup";
import { validation } from "../../shared/middlewares/Validation.js";

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
  const result = req.body;
  console.log(result);
  res.status(StatusCodes.CREATED).json(result);
};
