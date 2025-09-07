import { db } from "../../../utils/dbCitiesData";

export default defineEventHandler(async (event) => {
  const { city } = event.context.params;

  const pool = db();
  const [rows] = await pool.query(
    "SELECT data FROM main_heading WHERE city_slug = ?",
    [city]
  );
  // console.log(rows);
  return rows;
});
