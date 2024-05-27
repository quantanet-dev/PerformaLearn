import { Recommendation, columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Recommendation[]> {
  const res = await fetch(
    "https://6654f6ed3c1d3b602937ead7.mockapi.io/PersonalizedRecommendations"
  );
  const data = await res.json();

  return data;
}

export default async function TableUI() {
  const data = await getData();

  return <DataTable columns={columns} data={data} />;
}
