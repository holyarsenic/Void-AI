import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/Landing/Hero";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Navbar />
      <Hero />
    </div>
  );
}
