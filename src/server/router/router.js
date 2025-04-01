import { Router } from "express";
import { UsuarioController } from "../controller/usuario/index.js";
const router = Router();

router.get("/", (req, res) => {
  res.send("TESTE, kkkk");
});

// Cadastro de usuario e login
router.post(
  "/usuario",
  UsuarioController.createValidation,
  UsuarioController.createUp
);

export { router };
