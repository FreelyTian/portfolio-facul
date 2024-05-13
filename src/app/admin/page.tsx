import { logButtonClick } from "@/components/buttons/logOut";
import SideBar from "@/components/sidebar/sidebar";
import { MainTable } from "@/components/table/main-table";
import { Button } from "@/components/ui/button";
import { UserAvatar } from "@/components/user-avatar/UserAvatar";
import { useAtom } from "jotai";
import { titleAtom } from "../../../atoms";

export default function Admin() {
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
        <MainTable />
      </div>
    </>
  );
}
