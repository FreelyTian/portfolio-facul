import { addMateriaButton, logButtonClick } from "@/app/actions/actions";
import SideBar from "@/components/sidebar/sidebar";
import { Button } from "@/components/ui/button";
import { UserAvatar } from "@/components/user-avatar/UserAvatar";
import { MyTable } from "@/components/table/table";
import { getDataM, handleData } from "@/components/table/dataProvider";
import { columnsM, columnsP, Materia, Post } from "../columns";
import { get } from "http";
import { Input } from "@/components/ui/input";
import { ModelForm } from "@/components/form/modelsForm";
import Link from "next/link";
import { revalidatePath } from "next/cache";

export default async function Admin({ params }: { params: { model: string } }) {
  const model = decodeURI(params.model) as string;
  const dados = await handleData(model);
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
        <div className="flex gap-2 flex-col justify-start ml-3.5 p-2">
          <div className="flex flex-row justify-between">
            <h1 className="text-4xl">{model}</h1>
            {model == "Posts"
              ? (() => {
                  return (
                    <div className="flex border rounded-md text-center items-center p-2 bg-primary shadow-md text-white hover:bg-slate-800">
                      <Link href={"Posts/create"}>Adicionar Post</Link>
                    </div>
                  );
                })()
              : (() => {
                  return <div></div>;
                })()}
          </div>
          <MyTable
            columns={model == "Matérias" ? columnsM : columnsP}
            data={dados}
          ></MyTable>
          {model == "Matérias"
            ? (() => {
                return <ModelForm model="Matérias"></ModelForm>;
              })()
            : (() => {
                return <div></div>;
              })()}
        </div>
      </div>
    </>
  );
}
