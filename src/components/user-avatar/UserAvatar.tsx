/* eslint-disable @next/next/no-img-element */
import { auth } from "@/auth";

export async function UserAvatar() {
  const session = await auth();

  if (!session?.user) return null;

  return (
    <div className="flex flex-row items-center">
        
      <img
        className="h-12 rounded-full p-1"
        src={session.user.image as string}
        alt={"Foto do User"}
      />
      <h2>{session.user.name}</h2>
    </div>
  );
}
