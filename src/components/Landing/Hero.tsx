"use client";

import { useState } from "react";
import LightLines from "../ui/light-lines";
import Logo from "@/assets/Logo/Logo";
import { ArrowUp } from "lucide-react";
import { Button } from "../ui/button";

const Hero = () => {
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    if (!value.trim()) return;
    setValue("");
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#050505] text-white">
      <div className="absolute inset-0">
        <LightLines />
        <Logo className="absolute inset-0 h-full w-full text-foreground/10" />
      </div>


      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-8 sm:px-10 lg:px-20 lg:py-10">
        <div className="w-full max-w-2xl">
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-background/30 shadow-2xl shadow-black/20 backdrop-blur-xl transition-all duration-200 focus-within:border-background/20 focus-within:bg-background/40 pb-10">

            <textarea
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmit();
                }
              }}
              placeholder="What shall we create in the void?"
              rows={2}
              className="min-h-30 w-full resize-none bg-transparent px-5 pt-5 pb-16 text-sm leading-6 text-white placeholder:text-white/40 outline-none scrollbar-none"/>

            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
              <div
                className="flex h-9 w-9 items-center justify-center rounded-xl text-white/50 transition hover:bg-white/10 hover:text-white">
                  <Logo className="h-5 w-5"/>
              </div>

              <Button
                variant={"default"}
                onClick={handleSubmit}
                disabled={!value.trim()}
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-black transition-all hover:scale-105 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:scale-100">
                <ArrowUp size={18} strokeWidth={2.5} />
              </Button>
            </div>
          </div>

          <p className="mt-3 text-center text-xs text-white/40">
            Press Enter to send · Shift + Enter for a new line
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;