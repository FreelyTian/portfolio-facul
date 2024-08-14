
import { Input } from "@/components/ui/input";

export default function Crud({ params }: { params: { mode: string } }) {
  switch (params.mode) {
    case "create":
      return (
        <div className="flex flex-col items-center gap-2 mt-10">
          <Input placeholder="Nome do Post" className="w-3/6 text-center"></Input>
          
        </div>
      );
    case "edit":
      return (
        <div>
          <h1>Edit</h1>
        </div>
      );
    case "delete":
      return (
        <div>
          <h1>Delete</h1>
        </div>
      );
    default:
      return (
        <div>
          <h1>404</h1>
        </div>
      );
  }
}
