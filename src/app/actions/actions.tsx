"use server";
import { signOut } from "@/auth";
import prisma from "../../../db/db";
import { FormatDetection } from "next/dist/lib/metadata/types/extra-types";
import { revalidatePath } from "next/cache";
import { Materia } from "../admin/columns";

export async function logButtonClick() {
  await signOut({ redirectTo: "/" });
}

export async function addMateriaButton(matName: FormData) {
  revalidatePath("/admin/Matérias");
  var materia = matName.get("materia");
  var professor = matName.get("professor");
  var periodo = matName.get("periodo");
  var dayTime = matName.get("dayTime");
  var dayOfWeek = matName.get("dayOfWeek");
  var bloco = matName.get("block");
  var sala = matName.get("sala");
  await prisma.materia.create({
    data: {
      name: materia as string,
      professor: professor as string,
      periodo: periodo as string,
      dayOfWeek: dayOfWeek as string,
      bloco: bloco as string,
      dayPeriod: dayTime as string,
      sala: sala as string,
    },
  });
}

export async function editRegister(materia: Materia, updateData: FormData) {
  revalidatePath("/admin/Matérias");
  var id = materia.id;
  await prisma.materia.update({
    where: {
      id: id,
      name: materia.name,
      professor: materia.professor,
      periodo: materia.periodo,
    },
    data: {
      name: updateData.get("materianame") as string,
      periodo: updateData.get("materiaperiodo") as string,
      professor: updateData.get("materiaprofessor") as string,
    },
  });
}
