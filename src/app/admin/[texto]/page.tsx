import { logButtonClick } from "@/components/buttons/logOut";
import SideBar from "@/components/sidebar/sidebar";
import { Button } from "@/components/ui/button";
import { UserAvatar } from "@/components/user-avatar/UserAvatar";
import { atom, useAtom, useAtomValue } from "jotai";
import { titleAtom } from "../../../../atoms";
import { MyTable } from "@/components/table/table";
import { getDataM, getDataP } from "@/components/table/dataProvider";
import { columnsM, columnsP } from "../columns";

export default async function Admin({ params }: { params: { texto: string } }) {
  const texto = decodeURI(params.texto) as string;
  const data = texto == "Matérias" ? await getDataM() : await getDataP();
  const columns = texto == "Matérias" ? columnsM : columnsP;
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
        <SideBar />
        <MyTable texto={texto} columns={columns} data={data} />
      </div>
    </>
  );
}
