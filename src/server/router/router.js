import { Router } from "express";
import { UsuarioController } from "../controller/usuario/index.js";
const router = Router();

router.get("/", (req, res) => {
  res.send("TESTE DE API RODANDO!");
});

// Cadastro de usuario e login
router.post(
  "/usuario",
  UsuarioController.createValidation,
  UsuarioController.createUp
);

<<<<<<< HEAD:src/server/router/router.js
export { router };
=======
export {router} ;
>>>>>>> 7cdf7a2ef51c3ff81549d3c1718b02b97f9e1877:src/server/router/index.js
