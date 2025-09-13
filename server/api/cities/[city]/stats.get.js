import { dbCitiesData } from "../../../utils/dbCitiesData";

export default defineEventHandler(async (event) => {
  const { city } = event.context.params;

  const pool = dbCitiesData();
  const [rows] = await pool.query(
    "SELECT data FROM stats WHERE city_slug = ?",
    [city]
  );

  return rows;
});
