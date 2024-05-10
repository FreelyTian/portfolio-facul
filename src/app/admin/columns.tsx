"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Materia = {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
};

export const columns: ColumnDef<Materia>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "createdAt",
    header: "Criada em:",
  },
  {
    accessorKey: "updatedAt",
    header: "Atualizada em:",
  },
];
