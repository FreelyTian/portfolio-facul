
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PersonStanding } from "lucide-react";
import { signIn } from "@/auth.ts";

export function NavBar() {
  return (
    <div className="flex h-10 w-full items-center flex-row justify-between px-4 md:px-6 z-20">
      <Link className="flex items-center gap-2 text-lg font-semibold" href="#">
        <PersonStanding size={28} />
        <span>Samuel Araújo</span>
      </Link>
      <div className="flex items-center gap-4 pt-4">
        <nav className="hidden gap-4 md:flex">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Contato
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Sobre
          </Link>
        </nav>
        <form
          action={async () => {
            "use server";
            await signIn("google", { redirectTo: "/admin/Posts" });
          }}
        >
          <Button
            type="submit"
            className="rounded-md shadow-sm p-2 border hover:bg-primary/80"
          >
            Sign in
          </Button>
        </form>
      </div>
    </div>
  );
}
