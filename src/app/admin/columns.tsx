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

export const columnsM: ColumnDef<Materia>[] = [
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

export type Post = {
  id: string;
  title: string;
  content: string;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export const columnsP: ColumnDef<Post>[] = [
  {
    accessorKey: "title",
    header: "Título",
  },
  {
    accessorKey: "content",
    header: "Conteúdo",
    cell: ({ row }) => {
      const content = String(row.getValue("content"));
      if (content.length > 20) {
        return content.slice(0, 20) + "...";
      } else {
        return content;
      }
    },
  },
  {
    accessorKey: "createdAt",
    header: "Criado em:",
  },
  {
    accessorKey: "updatedAt",
    header: "Atualizado em:",
  },
  {
    accessorKey: "published",
    header: "Publicado?",
  },
];

