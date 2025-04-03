import knex from "knex";
import "dotenv/config";
import knexConfig from "./knexfile.js";

const getEnvironment = () => {
  switch (process.env.NODE_ENV) {
    case "production":
      return knexConfig.production;
    default:
      return knexConfig.development;
  }
};

const db = knex(getEnvironment());

export const Knex = db;
