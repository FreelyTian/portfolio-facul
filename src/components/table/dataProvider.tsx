"use server";
import { revalidatePath } from "next/cache";
import prisma from "../../../db/db";
import { title } from "process";
import { Materia } from "@/app/admin/columns";

export async function getDataM() {
  const data = await prisma.materia.findMany();
  return data;
}

export async function getDataP() {
  const data = await prisma.post.findMany();
  return data;
}

export async function createPost(data: {
  title: string;
  content: string | undefined;
  materiaId: string;
}) {
  const exists = await getPost(data.materiaId);
  if (exists == null) {
    await prisma.post.create({
      data: {
        title: data.title,
        content: data.content!,
        materiaId: data.materiaId,
      },
    });
  } else {
    await prisma.post.update({
      where: {
        id: exists.id,
      },
      data: {
        title: data.title,
        content: data.content,
      },
    });
  }
  console.log("Post criado");
  revalidatePath("/admin/Posts");
}

export async function getPost(materiaID: string) {
  console.log(materiaID);
  const data = await prisma.post.findFirst({
    where: {
      materiaId: materiaID,
    },
  });
  console.log(data);
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
