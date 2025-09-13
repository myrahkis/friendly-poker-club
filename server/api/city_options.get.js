import { dbCitiesData } from "../utils/dbCitiesData";

export default defineEventHandler(async () => {
  const pool = dbCitiesData();
  const [rows] = await pool.query(
    "SELECT * FROM city_options WHERE is_hidden = 0"
  );
  return rows;
});
