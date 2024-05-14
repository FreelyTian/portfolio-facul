import prisma from "../../../db/db";
import { Materia, Post } from "@/app/admin/columns";

async function getDataM(): Promise<Materia[]> {
  "use server";
  const data = prisma.materia.findMany();
  return data;
}

async function getDataP(): Promise<Post[]> {
  "use server";
  const data = prisma.post.findMany();
  return data;
}

export { getDataM, getDataP };
