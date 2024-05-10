import { logButtonClick } from "@/components/buttons/logOut";
import SideBar from "@/components/sidebar/sidebar";
import { Button } from "@/components/ui/button";
import { UserAvatar } from "@/components/user-avatar/UserAvatar";
import { Materia, columns } from "./columns";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function Admin() {
  async function getData(): Promise<Materia[]> {
    const data = prisma.materia.findMany();
    return data;
  }
  const data = await getData();
  return (
    <>
      <div className="w-full flex items-center justify-between h-14 p-2 border-b shadow-sm">
        <div>
          <UserAvatar />
        </div>
        <form action={logButtonClick}>
          <Button type="submit" variant={"default"} className="p-2">
            Sign Out
          </Button>
        </form>
      </div>
      <div className="flex flex-row w-full min-h-screen">
          <SideBar columns={columns} data={data} />
          
      </div>
    </>
  );
}
