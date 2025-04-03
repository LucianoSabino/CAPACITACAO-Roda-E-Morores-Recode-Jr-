import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const commonConfig = {
  migrations: {
    directory: path.resolve(__dirname, "..", "migrations"),
  },
  seeds: {
    directory: path.resolve(__dirname, "..", "seeds"),
  },
};

const development = {
  ...commonConfig,
  client: "sqlite3",
  connection: {
    filename: path.resolve(
      __dirname,
      "..",
      "..",
      "..",
      "..",
      "database.sqlite"
    ),
  },
  useNullAsDefaul: true,
  pool: {
    afterCreate: (connection, done) => {
      connection.run("PRAGMA foreign_keys = ON");
      done();
    },
  },
};

const production = {
  ...development,
};

const knexConfig = {
  development,
  production,
};

export default knexConfig;
