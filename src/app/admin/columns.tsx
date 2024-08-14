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
import {
  ArrowUpDown,
  Check,
  Edit,
  MoreHorizontal,
  MoreHorizontalIcon,
  Trash,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { deleteRecord } from "@/components/table/dataProvider";
import Link from "next/link";
import { revalidatePath } from "next/cache";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { editRegister } from "../actions/actions";
import { useRef } from "react";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Materia = {
  id: string;
  name: string;
  periodo: string;
  createdAt: Date;
  updatedAt: Date;
};

export const columnsM: ColumnDef<Materia>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant={"ghost"}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "periodo",
    header: "Período",
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
    header: "Actions",
    enableHiding: false,
    cell: ({ row }) => {
      const record = row.original;
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const ref = useRef<HTMLFormElement>(null);
      return (
        <div className="flex gap-2">
          <Popover>
            <PopoverTrigger asChild className="flex flex-row gap-1">
              <Button className=" w-full bg-slate-600">
                <Edit className="p-1"></Edit>
                Edit
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[32rem] backdrop-blur-lg shadow-lg">
              <form
                action={async (formData) => {
                  await editRegister(record, formData);
                  ref.current?.reset();
                }}
                className="w-full flex items-center flex-row gap-2"
              >
                <Input
                  className="w-full"
                  type="text"
                  name="materianame"
                  placeholder="Nome da matéria"
                  defaultValue={record.name}
                ></Input>
                <Input
                  className="w-20"
                  type="text"
                  name="materiaperiodo"
                  placeholder="Período"
                  defaultValue={record.periodo}
                ></Input>
                <Button
                  variant={"default"}
                  className="w-10 p-1 hover:bg-green-300"
                >
                  <Check className="h-16 w-16 p-0"></Check>
                </Button>
              </form>
            </PopoverContent>
          </Popover>
          <Button
            variant={"destructive"}
            onClick={() => {
              deleteRecord(record.id, "Matérias");
            }}
          >
            <Trash className="p-1"></Trash> Delete
          </Button>
        </div>
        // <DropdownMenu>
        //   <DropdownMenuTrigger asChild>
        //     <Button variant="ghost" className="h-8 w-8 p-0">
        //       <span className="sr-only">Open menu</span>
        //       <MoreHorizontal className="h-4 w-4" />
        //     </Button>
        //   </DropdownMenuTrigger>
        //   <DropdownMenuContent align="end">
        //     <DropdownMenuLabel>Actions</DropdownMenuLabel>
        //     <DropdownMenuSeparator />
        //     <DropdownMenuItem
        //       className="hover:bg-red-400 hover:text-white"
        //       onClick={() => {
        //         deleteRecord(record.id, "Matérias");
        //       }}
        //     >
        //       <Trash className="p-1"></Trash> Delete
        //     </DropdownMenuItem>
        //     <DropdownMenuItem className="hover:bg-accent hover:text-accent-foreground">

        //     </DropdownMenuItem>
        //   </DropdownMenuContent>
        // </DropdownMenu>
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
      const record = row.original;

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
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="hover:bg-red-400 hover:text-white"
              onClick={() => {
                deleteRecord(record.id, "Post");
                revalidatePath("/admin/Posts");
              }}
            >
              <Trash className="p-1"></Trash> Delete
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-accent hover:text-accent-foreground">
              <Edit className="p-1"></Edit>
              <Link href={"admin/Posts/edit/" + record.id}>Edit</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
