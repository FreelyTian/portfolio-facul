import { DataTable } from "../ui/data-table";
import { useAtom } from "jotai";
import { useHydrateAtoms } from "jotai/utils";
import { titleAtom } from "../../../atoms";
import prisma from "../../../db/db";
import { Materia, Post, columnsM, columnsP } from "@/app/admin/columns";
import { ColumnDef } from "@tanstack/react-table";

export async function MainTable() {
  const texto = useAtom(titleAtom) as String;
  async function getDataM(): Promise<Materia[]> {
    const data = prisma.materia.findMany();
    return data;
  }

  async function getDataP(): Promise<Post[]> {
    const data = prisma.post.findMany();
    return data;
  }

  const data = texto == "Matérias" ? await getDataM() : await getDataP();
  const columns =
    texto == "Matérias"
      ? (columnsM as ColumnDef<Materia, unknown>[])
      : (columnsP as ColumnDef<Post, unknown>[]);
  return (
    <div className="flex gap-2 flex-col justify-start ml-3.5 p-2">
      <h1 className="text-4xl">{texto}</h1>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
