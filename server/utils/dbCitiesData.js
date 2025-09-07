import mysql from "mysql2/promise";

const config = useRuntimeConfig();
let pool;

console.log(config);

export const db = () => {
  if (!pool) {
    pool = mysql.createPool({
      port: config.dbPort,
      host: config.dbHost,
      user: config.dbUser,
      password: config.dbPassword,
      database: config.dbName,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });
  }
  return pool;
};
