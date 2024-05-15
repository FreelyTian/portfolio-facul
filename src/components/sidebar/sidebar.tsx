'use client'
import { Button } from "../ui/button";
import { useAtom } from "jotai";
import { titleAtom } from "../../../atoms";
import Link from "next/link";
import {
  BookAIcon,
  BookIcon,
  Edit,
  FileIcon,
  FileSpreadsheetIcon,
  Plus,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
  DropdownMenuContent,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";

export default function SideBar() {
  return (
    <div className="w-[70px] gap-3 bg-zinc-50 border-r shadow-sm drop-shadow-md flex flex-col p-2">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              className="bg-white flex flex-row justify-center rounded-md h-12 text-center hover:bg-black hover:text-white border-stone-300 shadow-md shadow-zinc-300"
              href={"/admin/Matérias"}
            >
              <BookIcon className="mt-3" />
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right" sideOffset={6}>
            Matérias
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              className="bg-white flex flex-row justify-center rounded-md h-12 text-center hover:bg-black hover:text-white border-stone-300 shadow-md shadow-zinc-300"
              href={"/admin/Posts"}
            >
              <FileIcon className="mt-3" />
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right" sideOffset={6} className="bg-white">
            Posts
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Link
            href="#"
            className="bg-white flex flex-row justify-center rounded-md h-12 text-center hover:bg-black hover:text-white border-stone-300 shadow-md shadow-zinc-300"
          >
            <Edit className="mt-3" />
          </Link>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="center"
          sideOffset={6}
          side="right"
          className="bg-white mt-11 duration-300 animate-in slide-in-from-left-2 fade-in-15 zoom-in-95 rounded-md overflow-hidden border-zinc-200 border w-36"
        >
          <DropdownMenuLabel className="bg-black text-white w-full">
            {" "}
            Ações
          </DropdownMenuLabel>
          <DropdownMenuGroup className="flex flex-col gap-1 p-1">
            <DropdownMenuLabel>Editar</DropdownMenuLabel>
            <DropdownMenuItem className="flex flex-row gap-1">
              <Edit></Edit>
              <Link href={"#"}>Posts</Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex flex-row gap-1">
              <Edit></Edit>
              <Link href={"#"}>Matérias</Link>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator></DropdownMenuSeparator>
          <DropdownMenuGroup className="flex flex-col gap-1 p-1">
            <DropdownMenuLabel>Criar</DropdownMenuLabel>
            <DropdownMenuItem className="flex flex-row gap-1">
              <Plus></Plus>
              <Link href={"#"}>Posts</Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex flex-row gap-1">
              <Plus></Plus>
              <Link href={"#"}>Matérias</Link>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
