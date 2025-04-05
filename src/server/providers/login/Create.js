import { Knex } from "../../database/Knex/index.js";
import { CriptograviaSenha } from "../../shared/services/CriptografiaSenha.js";

export const create = async (data) => {
  try {
    const senhaCriptografia = await CriptograviaSenha.gerandoSenha(data.senha);
    data.senha = senhaCriptografia;

    const [result] = await Knex("sign").insert(data).returning("id");
    if (typeof result === "object" && result.id) {
      return result.id;
    } else if (typeof result === "number") {
      return result;
    }

    throw new Error("Erro ao cadastrar registro");
  } catch (error) {
    console.log(error);
    return new Error("Erro ao cadastrar registro !");
  }
};
