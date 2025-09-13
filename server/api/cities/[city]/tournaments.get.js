import { dbTournaments } from "../../../utils/dbTournaments";

export default defineEventHandler(async (event) => {
  const { city } = event.context.params;

  const pool = dbTournaments();
  const [rows] = await pool.query(
    "SELECT name,start_time,status,city_name_lat,description FROM tournament_schedule WHERE city_name_lat = ?",
    [city]
  );

  return rows;
});
