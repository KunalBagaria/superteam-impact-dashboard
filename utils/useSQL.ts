import pg from "pg-promise";

const pgp = pg();
const db = pgp(process.env.DB_STRING ?? "");

export const useSQL = async (query: string) => {
  let resp;
  try {
    resp = await db.any(query);
  } catch (e) {
    resp = e;
  }

  return resp;
};

export const useMetricsData = () => {
  const fields = [
    "id",
    "child_category",
    "description",
    "last_month",
    "monetary_metric",
    "name",
    "parent_category",
    "this_month",
    "total",
  ];
  return useSQL(`SELECT ${fields.join(", ")} from metrics`);
};
