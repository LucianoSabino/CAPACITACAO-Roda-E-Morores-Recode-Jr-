import { StatusCodes } from "http-status-codes";
import * as yup from "yup";
import { validation } from "../../shared/middlewares/Validation.js";
import { UsuarioProvider } from "../../providers/login/index.js";
import { CriptograviaSenha } from "../../shared/services/CriptografiaSenha.js";
import { JWTService } from "../../shared/services/JWT.js";

export const loginValidation = validation((getSchema) => ({
  body: getSchema(
    yup.object().shape({
      usuario: yup.string().required().min(3).max(25),
      senha: yup.string().required(),
    })
  ),
}));

export const login = async (req, res) => {
  const { usuario, senha } = req.body;

  const result = await UsuarioProvider.login(usuario);

  try {
    const verificandoSenha = await CriptograviaSenha.verificandoSenha(
      senha,
      result.senha
    );
    if (!verificandoSenha) {
      res.status(StatusCodes.UNAUTHORIZED).json({
        errors: {
          default: "Usuario ou senha são invalidos!",
        },
      });
      return;
    } else {
      const accessToken = JWTService.sign({
        uid: result.id,
        usuario: result.usuario,
      });

      if (accessToken === "JWT_SECRET_NOT_FOUND") {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
          errors: {
            default: "Erro ao gerar o Token de acesso!",
          },
        });
        return;
      }

      res.status(StatusCodes.OK).json({ accessToken });
    }
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.BAD_REQUEST).json({
      error: {
        default: "Erro interno!",
      },
    });
  }
};
