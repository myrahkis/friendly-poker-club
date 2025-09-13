import mysql from "mysql2/promise";

const config = useRuntimeConfig();
let pool;

export const dbTournaments = () => {
  if (!pool) {
    pool = mysql.createPool({
      port: 3306,
      host: config.dbHost,
      user: config.dbTournamentsUser,
      password: config.dbTournamentsPassword,
      database: config.dbTournamentsName,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });
  }
  return pool;
};
