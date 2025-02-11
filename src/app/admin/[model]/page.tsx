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
import { Card, CardContent, CardHeader } from "@/components/ui/card";

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
            <h1 className="text-4xl animate-in ease-in-out duration-700 slide-in-from-bottom-4 fade-in-5">
              {model}
            </h1>
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
        {model == "Matérias" && (
          <div className="p-2 flex flex-col gap-2 w-3/12">
            <h2 className="animate-in ease-in-out duration-700 slide-in-from-bottom-5 text-4xl fade-in-5">
              Dias da Semana
            </h2>
            <Card className="w-full p-2 shadow-md animate-in ease-in-out duration-700 slide-in-from-bottom-6 fade-in-10">
              <CardHeader>
                Semana
                <hr />
              </CardHeader>
              <CardContent>
                <div className="flex flex-row justify-evenly w-full text-xs">
                  {[
                    "Segunda",
                    "Terça  ",
                    "Quarta ",
                    "Quinta ",
                    "Sexta  ",
                    "Sábado ",
                    "Domingo",
                  ].map((dia, index) => {
                    return (
                      <div
                        key={index}
                        className="flex flex-col gap-1 text-center items-center"
                      >
                        <p>{dia}</p>
                        <div
                          key={dia}
                          className="bg-blue-400 rounded-md h-11 w-11"
                        ></div>
                        <div
                          key={dia}
                          className="bg-blue-400 rounded-md h-11 w-11"
                        ></div>
                        <div
                          key={dia}
                          className="bg-blue-400 rounded-md h-11 w-11"
                        ></div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </>
  );
}
