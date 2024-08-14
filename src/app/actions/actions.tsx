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
  var rawData = matName.get("materia");
  await prisma.materia.create({
    data: {
      name: rawData as string,
    },
  });
}

export async function editRegister(materia: Materia, updateData: FormData) {
  revalidatePath("/admin/Matérias");
  var id = materia.id;
  await prisma.materia.update({
    where: {
      id: id,
    },
    data: {
      name: updateData.get("materianame") as string,
      periodo: updateData.get("materiaperiodo") as string,
    },
  });
}
