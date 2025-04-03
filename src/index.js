import { Knex } from "./server/database/Knex/index.js";
import { app } from "./server/server.js";

console.log("Iniciando migrações...");
await Knex.migrate.latest();
console.log("Migrações concluidas. Inicializando o servidor!");

app.listen(process.env.PORT || 8080, () => {
  console.log("Api rodado na porta 8080");
});
