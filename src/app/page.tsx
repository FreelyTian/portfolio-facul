import StarterPage from "@/components/landing-page/LandingPage";
import { NavBar } from "@/components/nav-bar/NavBar";

const Shape = ({ className }: { className: string }) => (
  <div className={`absolute opacity-50 animate-float ${className}`} />
);

export default function LandingPage() {
  return (
    <div className="bg-gray-50 bg-landing flex flex-col justify-between">
      <Shape className="w-64 h-64 bg-blue-200 rounded-full top-[-10%] left-[-10%]" />
      <Shape className="w-48 h-48 bg-green-200 rounded-full bottom-[-5%] right-[-5%]" />
      <Shape className="w-32 h-32 bg-yellow-200 rotate-45 top-[20%] right-[10%]" />
      <Shape className="w-32 h-24 rounded-2xl bg-slate-200 rotate-45 top-[40%] right-[45%]" />
      <Shape className="w-36 h-24 rounded-2xl bg-orange-200 rotate-45 top-[56%] left-[15%]" />
      <NavBar />
      <StarterPage />
    </div>
  );
}
