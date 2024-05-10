"use server";
import { signOut } from "@/auth";

export async function logButtonClick() {
  "use server";
  await signOut({ redirectTo: "/" });
}
