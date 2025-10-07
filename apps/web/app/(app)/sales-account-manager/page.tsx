import { columns, Payment } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52t",
      amount: 200,
      status: "pending",
      email: "a@example.com",
    },
    {
      id: "728ed13t",
      amount: 300,
      status: "success",
      email: "mason@example.com",
    },
    {
      id: "338ed13t",
      amount: 7700,
      status: "success",
      email: "jenna@example.com",
    },
  ];
}

export default async function Page() {
  const data = await getData();

  return (
    <div className="container mx-auto p-6">
      <h3 className="mb-3">매출처 관리</h3>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
