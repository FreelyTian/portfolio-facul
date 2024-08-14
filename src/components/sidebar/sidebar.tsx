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
      
    </div>
  );
}
