import { dbTournaments } from "../../../utils/dbTournaments";

export default defineEventHandler(async (event) => {
  const { city } = event.context.params;
  const finalsCatId = "0a112d45-4d7a-402e-a3ac-4c1e226e4e27";

  const pool = dbTournaments();
  const [rows] = await pool.query(
    `
    SELECT ts.id,ts.name,ts.start_time,ts.city_name_lat,ts.description
    FROM tournament_schedule ts
    WHERE ts.city_name_lat = ?
      AND ts.id NOT IN (
        SELECT tc.tournament_id
        FROM v_tournament_categories tc
        WHERE tc.category_id = ?
      )
  `,
    [city, finalsCatId],
  );

  return rows;
});
