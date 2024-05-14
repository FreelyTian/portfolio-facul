"use client";

import { ColumnDef } from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Edit, MoreHorizontal, MoreHorizontalIcon } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
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
    enableSorting: true,
  },
  {
    accessorKey: "createdAt",
    cell: (props: any) =>
      props.getValue().toLocaleDateString() +
      " às " +
      props.getValue().toLocaleTimeString().slice(0, 5),
    header: "Criada em:",
  },
  {
    accessorKey: "updatedAt",
    cell: (props: any) =>
      props.getValue().toLocaleDateString() +
      " às " +
      props.getValue().toLocaleTimeString().slice(0, 5),
    header: "Atualizada em:",
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const post = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="hover:h-9 hover:w-9 hover:cursor-pointer h-8 w-8 p-0"
            >
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>

            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(post.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
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
    enableSorting: true,
  },
  {
    accessorKey: "content",
    header: "Conteúdo",
    enableSorting: true,
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
    cell: (props: any) => {
      return (
        props.getValue().toLocaleDateString() +
        " às " +
        props.getValue().toLocaleTimeString().slice(0, 5)
      );
    },
  },
  {
    accessorKey: "updatedAt",
    header: "Atualizado em:",
    cell: (props: any) =>
      props.getValue().toLocaleDateString() +
      " às " +
      props.getValue().toLocaleTimeString().slice(0, 5),
  },
  {
    accessorKey: "published",
    header: "Publicado?",
    cell: (props: any) => (props.getValue() ? "Sim" : "Não"),
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const post = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(post.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

