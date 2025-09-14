import { dbTournaments } from "../../../utils/dbTournaments";

export default defineEventHandler(async (event) => {
  const { city } = event.context.params;
  const finalsCatId = "0a112d45-4d7a-402e-a3ac-4c1e226e4e27";

  const pool = dbTournaments();
  const [rows] = await pool.query(
    `
        SELECT ts.name,ts.start_time,ts.city_name_lat,ts.description
        FROM tournament_schedule ts
        JOIN v_tournament_categories tc 
        ON ts.id = tc.tournament_id
        WHERE LOWER(ts.city_name_lat) = LOWER(?)
        AND tc.category_id = ?
    `,
    [city, finalsCatId]
  );

  return rows;
});
