import { Router } from "express";
import { UsuarioController } from "../controller/usuario/index.js";
import { loginController } from "../controller/login/index.js";

const router = Router();

router.get("/", (req, res) => {
  res.send("TESTE, foi!");
});

// Cadastro de usuario e login
router.post(
  "/usuario",
  UsuarioController.createValidation,
  UsuarioController.createUp
);

router.post(
  "/singUp",
  loginController.singUpValidation,
  loginController.singUp
);

router.post("/login", loginController.loginValidation, loginController.login);

export { router };
