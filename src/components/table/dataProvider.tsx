"use server";
import { revalidatePath } from "next/cache";
import prisma from "../../../db/db";

export async function getDataM() {
  const data = await prisma.materia.findMany();
  return data;
}

export async function getDataP() {
  const data = await prisma.post.findMany();
  return data;
}

export async function deleteRecord(id: string, model: string) {
  switch (model) {
    case "Matérias":
      await prisma.materia.delete({
        where: {
          id: id,
        },
      });
      revalidatePath("/admin/Materias");
      break;
    case "Posts":
      await prisma.post.delete({
        where: {
          id: id,
        },
      });
      revalidatePath("/admin/Posts");
      break;
  }
}

async function handleData(texto: string) {
  if (texto == "Matérias") {
    return await getDataM();
  } else {
    return await getDataP();
  }
}

export { handleData };
