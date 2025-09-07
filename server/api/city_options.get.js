import { db } from "../utils/dbCitiesData";

export default defineEventHandler(async () => {
  const pool = db();
  const [rows] = await pool.query(
    "SELECT * FROM city_options WHERE is_hidden = 0"
  );
  return rows;
});
