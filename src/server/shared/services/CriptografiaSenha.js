import { compare, genSalt, hash } from "bcryptjs";

const PASSWORD_SALT = 8;

const gerandoSenha = async (password) => {
  const saltGenerated = await genSalt(PASSWORD_SALT);
  return await hash(password, saltGenerated);
};

const verificandoSenha = async (password, hashedPassword) => {
  return await compare(password, hashedPassword);
};

export const CriptograviaSenha = {
  gerandoSenha,
  verificandoSenha,
};
