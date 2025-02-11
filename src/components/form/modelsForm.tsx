"use client";
import { addMateriaButton, editRegister } from "@/app/actions/actions";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useRef } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function ModelForm({ model }: { model: string }) {
  const ref = useRef<HTMLFormElement>(null);
  return (
    <div className="border rounded-lg animate-in ease-in-out duration-700 slide-in-from-bottom-6 p-4 shadow-md">
      <h2 className="text-2xl pb-2">Adicionar {model}</h2>
      <form
        ref={ref}
        className="flex flex-row gap-2"
        action={async (formData) => {
          await addMateriaButton(formData);
          ref.current?.reset();
        }}
      >
        <div className="flex flex-col gap-2">
          <Input
            className="w-[30.9rem]"
            id="materia_input"
            type="text"
            name="materia"
            placeholder="Nome da matéria..."
          ></Input>
          <div className="flex flex-row flex-nowrap gap-2">
            <Select name="dayTime">
              <SelectTrigger className="w-3/6">
                <SelectValue placeholder="Parte do Dia" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="manha">Manhã</SelectItem>
                <SelectItem value="tarde">Tarde</SelectItem>
                <SelectItem value="noite">Noite</SelectItem>
              </SelectContent>
            </Select>
            <Select name="dayOfWeek">
              <SelectTrigger className="w-3/6">
                <SelectValue placeholder="Dia da Semana" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="seg">Segunda-Feira</SelectItem>
                <SelectItem value="ter">Terça-Feira</SelectItem>
                <SelectItem value="qua">Quarta-Feira</SelectItem>
                <SelectItem value="qui">Quinta-Feira</SelectItem>
                <SelectItem value="sex">Sexta-Feira</SelectItem>
                <SelectItem value="sab">Sábado</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button type="submit" variant="default">
            Adicionar Matéria
          </Button>
        </div>
        <div className="flex flex-col gap-2">
          <Input
            className="w-6/6"
            id="professor_input"
            type="text"
            name="professor"
            placeholder="Nome do professor..."
          ></Input>
          <div className="flex flex-row flex-nowrap gap-2">
            <Input
              className="w-2/6"
              id="sala_input"
              type="text"
              name="sala"
              placeholder="Sala..."
            ></Input>
            <Select name="block">
              <SelectTrigger className="w-2/6">
                <SelectValue placeholder="Bloco" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="I">I</SelectItem>
                <SelectItem value="II">II</SelectItem>
              </SelectContent>
            </Select>
            <Input
              className="w-2/6"
              id="periodo_input"
              type="text"
              name="periodo"
              placeholder="Período..."
            ></Input>
          </div>
        </div>
      </form>
    </div>
  );
}
