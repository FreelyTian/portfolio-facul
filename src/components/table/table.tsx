"use client";
import { DataTable } from "../ui/data-table";

export function MyTable(props: { columns: any; data: any }) {
  return (
    <div>
      <DataTable columns={props.columns} data={props.data}></DataTable>
    </div>
  );
}
