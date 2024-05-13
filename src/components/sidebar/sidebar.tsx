'use client'
import { Button } from "../ui/button";
import { useAtom } from "jotai";
import { titleAtom } from "../../../atoms";

export default function SideBar() {
  const [texto, setTexto] = useAtom(titleAtom);

  return (
    <div className="w-2/12 gap-2 bg-zinc-100 border-r shadow-sm drop-shadow-md flex flex-col p-2">
      <Button
        className="w-full bg-trnasparent hover:bg-black hover:text-white border-stone-300 shadow"
        variant={"outline"}
        value={"Matérias"}
        onClick={(value) => {
          setTexto("Matérias");
        }}
      >
        Matérias
      </Button>
      <Button
        className="bg-trnasparent hover:bg-black hover:text-white border-stone-300 shadow"
        variant={"outline"}
        value={"Posts"}
        onClick={(value) => {
          setTexto(value.currentTarget.value);
        }}
      >
        Posts
      </Button>
      <h1>{texto}</h1>
    </div>
  );
}
