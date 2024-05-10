"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { DataTable } from "../ui/data-table";
import { ColumnDef } from "@tanstack/react-table";

export default function SideBar(props : Readonly<{columns: ColumnDef<unknown, unknown>[], data: unknown[]}>) {
  const [texto, setTexto] = useState("Matérias");
  return (
    <>
      <div className="w-2/12 gap-2 bg-zinc-100 border-r shadow-sm drop-shadow-md flex flex-col p-2">
        <Button
          className="w-full bg-trnasparent hover:bg-black hover:text-white border-stone-300 shadow"
          variant={"outline"}
          onClick={() => {
            setTexto("Matérias");
          }}
        >
          Matérias
        </Button>
        <Button
          className="bg-trnasparent hover:bg-black hover:text-white border-stone-300 shadow"
          variant={"outline"}
          onClick={() => {
            setTexto("Posts");
          }}
        >
          Posts
        </Button>
      </div>
      <div className="p-2 w-3/4">
        <div className=" flex gap-2 flex-col justify-start ml-3.5">
          <h1 className="text-4xl">{texto}</h1>
          <DataTable columns={props.columns} data={props.data} />
        </div>
      </div>
    </>
  );
}
