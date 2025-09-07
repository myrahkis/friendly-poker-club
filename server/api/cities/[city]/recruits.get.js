import { db } from "../../../utils/dbCitiesData";

export default defineEventHandler(async (event) => {
  const { city } = event.context.params;

  const pool = db();
  const [rows] = await pool.query(
    "SELECT data FROM recruits WHERE city_slug = ?",
    [city]
  );

  return rows;
});
