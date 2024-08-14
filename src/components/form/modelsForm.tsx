"use client";
import { addMateriaButton, editRegister } from "@/app/actions/actions";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useRef } from "react";
import { revalidatePath } from "next/cache";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Check, Edit } from "lucide-react";

export function ModelForm({ model}: { model: string;}) {
  const ref = useRef<HTMLFormElement>(null);
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <h2 className="text-2xl">Adicionar {model}</h2>
      <form
        ref={ref}
        className="flex flex-row gap-2"
        action={async (formData) => {
          await addMateriaButton(formData);
          ref.current?.reset();
        }}
      >
        <Input
          className="w-96"
          id="materia_input"
          type="text"
          name="materia"
          placeholder="Nome da matéria..."
        ></Input>
        <Button type="submit" variant="default">
          Adicionar Matéria
        </Button>
      </form>
      
    </div>
  );
}
