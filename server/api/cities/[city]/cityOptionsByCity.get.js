import { db } from "../../../utils/dbCitiesData";

export default defineEventHandler(async (event) => {
  const { city } = event.context.params;

  const pool = db();
  const [rows] = await pool.query(
    "SELECT names FROM city_options WHERE slug = ?",
    [city]
  );

  return rows;
});
