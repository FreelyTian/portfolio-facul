"use client";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import parse from "html-react-parser";
import { Card, CardContent } from "@/components/ui/card";
import { EditorInstance } from "novel";
import { defaultValue } from "./defaultValue";
import Editor from "@/components/editor/noveleditor";
import { HTMLContent } from "@tiptap/react";
import { useDebounceCallback } from "usehooks-ts";
import React from "react";
import { createPost, getDataM } from "@/components/table/dataProvider";
import { Materia } from "../../columns";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronsUpDown } from "lucide-react";

export default function Crud({ params }: { params: { mode: string } }) {
  const [content, setContent] = useState<HTMLContent>();
  const [saveStatus, setSaveStatus] = useState("Saved");
  const [mat, setMat] = React.useState<Materia[]>([]);
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    getDataM().then((materia) => {
      const values: Materia[] = [];
      materia.forEach((materia) => {
        values.push(materia);
      });
      setMat(values);
    });
  }, []);
  const debouncedUpdates = useDebounceCallback(
    async (editor: EditorInstance) => {
      const html = editor.getHTML();
      setContent(html);
      setSaveStatus("Saved");
    },
    500
  );
  console.log(defaultValue);
  switch (params.mode) {
    case "create":
      return (
        <div className="grid grid-cols-2 items-center gap-2 mt-10 p-2">
          <div className="flex flex-col p-2 gap-2 items-center">
            <h1>Editor V2</h1>
            <div className="w-full flex flex-row gap-2">
              <Input
                placeholder="Título"
                className="w-3/6"
                ref={inputRef}
              ></Input>
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    className="w-3/6 justify-between"
                  >
                    {value ? value : "Selecione a matéria"}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-full p-1 cursor-pointer">
                  <Command>
                    <CommandInput placeholder="Pesquisar Matéria..." />
                    <CommandList>
                      <CommandEmpty>Nenhuma Matéria Encontrada.</CommandEmpty>
                      <CommandGroup>
                        {mat.map((materia: Materia) => (
                          <CommandItem
                            key={materia.id}
                            value={materia.name}
                            onSelect={(currentValue) => {
                              setValue(currentValue);
                              setOpen(false);
                              return;
                            }}
                          >
                            {materia.name}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>
            <Editor initialValue={content} onChange={debouncedUpdates} />
            <div className="flex justify-end flex-row w-full">
              <Button
                className="w-1/6"
                onClick={async () => {
                  setSaveStatus("Saving...");
                  debouncedUpdates.flush();
                  const title = inputRef.current?.value as string;
                  const materiaId = mat.find((m) => m.name === value)
                    ?.id as string;
                  const text = JSON.stringify(content);
                  const data = {
                    title: title,
                    content: text,
                    materiaId: materiaId,
                  };
                  console.log(data);
                  createPost(data);
                  setSaveStatus("Saved");
                }}
              >
                criar
              </Button>
            </div>
          </div>
          <div>
            <div className="flex flex-col p-2 gap-2 items-center -mt-16">
              <h1>Preview</h1>
              <Card className="w-full p-2">
                <CardContent className="prose prose-lg dark:prose-invert prose-headings:font-title font-default focus:outline-none max-w-full">
                  {content?.length != 0 ? parse(`${content}`) : "No content"}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      );
    case "edit":
      return (
        <div>
          <h1>Edit</h1>
        </div>
      );
    case "delete":
      return (
        <div>
          <h1>Delete</h1>
        </div>
      );
    default:
      return (
        <div>
          <h1>404</h1>
        </div>
      );
  }
}

