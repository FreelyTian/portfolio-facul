"use client";
import { DataTable } from "../ui/data-table";

export function MyTable(props: { texto: any; columns: any; data: any }) {
  return (
    <div className="flex gap-2 flex-col justify-start ml-3.5 p-2 -z-10">
      <h1 className="text-4xl">{props.texto}</h1>
      <DataTable columns={props.columns} data={props.data} />
    </div>
  );
}
